const express = require("express");
const nodemailer = require("nodemailer");
const fs = require("fs/promises");
const path = require("path");
const router = express.Router();

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// async function loadTemplate(name) {
//   const filePath = path.join(__dirname, "../templates", name);
//   return fs.readFile(filePath, "utf-8");
// }

router.post("/test", async (req, res) => {
  const { to, html, subject } = req.body || {};
  if (!Array.isArray(to) || !html) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  try {
    // const finalHtml = html || (await loadTemplate(templateName));
    await transport.sendMail({
      from:
        process.env.FROM_ADDRESS ||
        process.env.EMAIL_FROM ||
        "no-reply@keelworks.org",
      to: to.join(","),
      subject: subject || process.env.EMAIL_SUBJECT || "Newsletter Test Email",
      html: html,
    });
    res.json({ message: "Email sent" });
  } catch (err) {
    console.error("Failed to send email", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
