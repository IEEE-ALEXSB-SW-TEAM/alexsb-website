import { sendEmail } from "../services/emailService.js";

export const testEmails = async () => {
  try {
    const testEmail = "username@example.com" // Replace with a real email

    await sendEmail(testEmail, "forgotPassword", { name: "Amr", code: "321422" });
    await sendEmail(testEmail, "welcome", { name: "Amr" });
    await sendEmail(testEmail, "eventRegistration", { name: "Amr", eventName: "AI Workshop", date: "March 20, 2025", location: "Tech Center" });
    

    console.log("Test emails sent successfully.");
  } catch (error) {
    console.error("Test email failed:", error);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  testEmails();
}