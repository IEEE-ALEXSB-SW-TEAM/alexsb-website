export const emailTemplates = {
    forgotPassword: (name, otp) => ({
        subject: "Reset Your Password - OTP",
        text: `Hi ${name},\n\nYour OTP for password reset is: ${otp}\n\nIf you didn’t request this, please ignore this email.`,
        html: `<p>Hi <strong>${name}</strong>,</p><p>Your OTP for password reset is:</p><h2 style="color: #ff0000;">${otp}</h2><p>If you didn’t request this, please ignore this email.</p>`,
      }),
  
    welcome: (name) => ({
      subject: "Welcome to IEEE Alex SB!",
      text: `Hi ${name},\n\nWelcome to IEEE Alex SB! We’re excited to have you on board.`,
      html: `<p>Hi <strong>${name}</strong>,</p><p>Welcome to <strong>IEEE Alex SB</strong>! We’re excited to have you on board.</p>`,
    }),
  
    eventRegistration: (name, eventName) => ({
      subject: `You're Registered for ${eventName}!`,
      text: `Hi ${name},\n\nYou have successfully registered for ${eventName}. We look forward to seeing you!`,
      html: `<p>Hi <strong>${name}</strong>,</p><p>You have successfully registered for <strong>${eventName}</strong>. We look forward to seeing you!</p>`,
    }),
  };
  