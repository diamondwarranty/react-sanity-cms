import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const formData = req.body;

    // Validate required fields
    const requiredFields = [
      "customerName", "vin", "mileage", "vehicleTowed", 
      "repairShopName", "streetAddress", "city", "state", "zip", 
      "phone", "contactName", "customerComplaint", "estimate"
    ];

    for (const field of requiredFields) {
      if (!formData[field] || formData[field].toString().trim() === "") {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Compose HTML email
    const html = `
      <h2>New Claim Form Submission</h2>
      ${Object.keys(formData).map(key => `<p><strong>${key}:</strong> ${formData[key]}</p>`).join("")}
    `;

    await resend.emails.send({
      from: "Claims Form <onboarding@diamondwarrantycorp.com>", // must be verified
      to: "amartinelli@diamondwarrantycorp.com",
      subject: "📩 New Claim Form Submission",
      html,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Claim API error:", err);
    res.status(500).json({ error: err.message });
  }
}