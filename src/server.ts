import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    // IMPORTANT: To make this work, user needs to set up these env vars
    // For testing, we'll log to console
    console.log("New Message Received:", { name, email, subject, message });

    const userEmail = process.env.CONTACT_EMAIL || "waikyawmyo4u@gmail.com";
    const userPass = process.env.CONTACT_PASSWORD;

    if (!userPass) {
      console.warn("CONTACT_PASSWORD missing. Message logged to console instead of sent.");
      return res.status(200).json({ 
        success: true, 
        message: "Message received (logged to console as no email password provided)." 
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    const mailOptions = {
      from: email,
      to: userEmail,
      subject: `Project Inquiry: ${subject}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
