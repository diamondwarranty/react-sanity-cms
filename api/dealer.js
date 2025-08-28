import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // we use formidable
  },
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Error parsing form" });
    }

    const { name, email, phone } = fields;

    // Prepare attachments
    let attachments = [];
    if (files.files) {
      const fileArray = Array.isArray(files.files) ? files.files : [files.files];
      attachments = fileArray.map((file) => ({
        filename: file.originalFilename,
        content: fs.readFileSync(file.filepath).toString("base64"),
      }));
    }

    try {
      await resend.emails.send({
        from: "Dealer Form <onboarding@yourdomain.com>",
        to: "fizaashafique@gmail.com", // change to your email
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
      return res.status(500).json({ error: error.message });
    }
  });
}
