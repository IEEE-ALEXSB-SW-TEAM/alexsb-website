import transporter from "../config/email.js";
import { emailTemplates } from "./emailTemplates.js";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (to, template, params) => {
  try {
    if (!emailTemplates[template]) {
      throw new Error(`Email template "${template}" not found.`);
    }

    let { subject, text, html } = emailTemplates[template];

    // Replace placeholders in subject, text, and html
    Object.keys(params).forEach((key) => {
      subject = subject.replace(`{${key}}`, params[key]);
      text = text.replace(`{${key}}`, params[key]);
      html = html.replace(`{${key}}`, params[key]);
    });

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
