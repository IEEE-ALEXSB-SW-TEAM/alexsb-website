import { sendEmail } from "../services/emailService.js";

export const testEmails = async () => {
  try {
    const testEmail = "username@example.com"; // Replace with a real email

    await sendEmail(testEmail, "forgotPassword", ["Amr", "321422"]);
    await sendEmail(testEmail, "welcome", ["Amr"]);
    await sendEmail(testEmail, "eventRegistration", ["Amr", "AI Workshop"]);

    console.log("Test emails sent successfully.");
  } catch (error) {
    console.error("Test email failed:", error);
  }
};
