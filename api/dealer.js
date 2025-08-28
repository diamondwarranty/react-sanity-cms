import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const resend = new Resend(process.env.RESEND_API_KEY);

function parseForm(req) {
  const form = formidable({ multiples: true });
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fields, files } = await parseForm(req);
    const { name, email, phone } = fields;

    // Ensure attachments
    let attachments = [];
if (files.files) {
  const fileArray = Array.isArray(files.files) ? files.files : [files.files];
  attachments = fileArray.map((file) => ({
    filename: file.originalFilename,
    type: file.mimetype, // include mime type
    content: fs.readFileSync(file.filepath).toString("base64"),
  }));
}


    await resend.emails.send({
      from: "Dealer Form <onboarding@diamondwarrantycorp.com>", // Must be verified in Resend
      to: "amartinelli@diamondwarrantycorp.com",
      subject: "New Dealer Application",
      html: `
        <h2>Dealer Application Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
      attachments,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Dealer API error:", error);
    return res.status(500).json({ error: error.message });
  }
}
