import transporter from "../config/email.js";
import { emailTemplates } from "./emailTemplates.js";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (to, template, params) => {
  try {
    if (!emailTemplates[template]) {
      throw new Error(`Email template "${template}" not found.`);
    }

    const { subject, text, html } = emailTemplates[template](...params);

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
};

