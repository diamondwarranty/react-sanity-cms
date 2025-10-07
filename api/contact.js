import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    await resend.emails.send({
      from: "Website Contact <onboarding@diamondwarrantycorp.com>",
      to: "support@ahsantaz.com", // change to client email when ready
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Form Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email", details: err.message });
  }
}
