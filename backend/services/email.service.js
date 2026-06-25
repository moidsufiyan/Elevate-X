import nodemailer from "nodemailer";

const getTransporter = () => {
  const isDefaultOrEmpty = 
    !process.env.EMAIL_PASS || 
    process.env.EMAIL_PASS === "your_app_password" || 
    process.env.EMAIL_USER === "your.email@gmail.com";

  if (isDefaultOrEmpty) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: parseInt(process.env.EMAIL_PORT, 10) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const sendEmail = async (options) => {
  const transporter = getTransporter();
  
  if (!transporter) {
    console.log("==========================================");
    console.log(`[EMAIL FALLBACK] Sending Email to: ${options.to}`);
    console.log(`Subject: ${options.subject}`);
    console.log(`Body:\n${options.text || options.html}`);
    console.log("==========================================");
    return { messageId: "dev-mode-fallback-id" };
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM || '"Elevate-X" <noreply@elevate-x.com>',
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email] Email sent successfully. Message ID: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error(`[Email] Failed to send email: ${error.message}`);
    if (process.env.NODE_ENV === "development") {
      console.log(`[EMAIL FALLBACK ON ERROR] Email details:\nTo: ${options.to}\nSubject: ${options.subject}`);
      return { messageId: "error-fallback-id" };
    }
    throw error;
  }
};

export const sendWelcomeEmail = async (user) => {
  await sendEmail({
    to: user.email,
    subject: "Welcome to Elevate-X!",
    text: `Hello ${user.name},\n\nWelcome to Elevate-X! Your account with the role of "${user.role}" has been created successfully.\n\nBest regards,\nThe Elevate-X Team`,
    html: `<h3>Hello ${user.name},</h3><p>Welcome to Elevate-X! Your account with the role of "<strong>${user.role}</strong>" has been created successfully.</p><br/><p>Best regards,<br/>The Elevate-X Team</p>`,
  });
};

export const sendBookingConfirmation = async (booking, mentor, founder) => {
  await sendEmail({
    to: [founder.email, mentor.email].join(","),
    subject: "Mentorship Session Confirmed - Elevate-X",
    text: `Hello,\n\nYour session has been scheduled:\nMentor: ${mentor.name}\nFounder: ${founder.name}\nDate: ${new Date(booking.date).toLocaleDateString()}\nTime: ${booking.timeSlot}\nMeeting Link: ${booking.meetingLink || 'To be provided'}\n\nBest regards,\nElevate-X`,
    html: `<h3>Mentorship Session Confirmed</h3><p>Your session has been scheduled:</p><ul><li><strong>Mentor:</strong> ${mentor.name}</li><li><strong>Founder:</strong> ${founder.name}</li><li><strong>Date:</strong> ${new Date(booking.date).toLocaleDateString()}</li><li><strong>Time:</strong> ${booking.timeSlot}</li><li><strong>Meeting Link:</strong> ${booking.meetingLink || 'To be provided'}</li></ul><br/><p>Best regards,<br/>Elevate-X Team</p>`,
  });
};

export const sendResetPasswordEmail = async (user, resetURL) => {
  await sendEmail({
    to: user.email,
    subject: "Password Reset Request - Elevate-X",
    text: `Hello ${user.name},\n\nYou requested a password reset. Please click on the link below to reset your password:\n${resetURL}\n\nThis link is valid for 10 minutes.\n\nIf you did not request this, please ignore this email.`,
    html: `<h3>Hello ${user.name},</h3><p>You requested a password reset. Please click on the button below to reset your password:</p><a href="${resetURL}" style="background-color:#4F46E5;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">Reset Password</a><p>This link is valid for 10 minutes.</p><p>If you did not request this, please ignore this email.</p>`,
  });
};

export const sendContactAcknowledgement = async (submission) => {
  await sendEmail({
    to: submission.email,
    subject: "We received your message - Elevate-X",
    text: `Hello ${submission.name},\n\nThank you for reaching out to Elevate-X. We have received your query regarding "${submission.subject}" and our team will get back to you shortly.\n\nBest regards,\nElevate-X Team`,
    html: `<h3>Hello ${submission.name},</h3><p>Thank you for reaching out to Elevate-X. We have received your query regarding "<strong>${submission.subject}</strong>" and our team will get back to you shortly.</p><br/><p>Best regards,<br/>Elevate-X Team</p>`,
  });
};

export const sendVerificationEmail = async (user, verificationURL) => {
  await sendEmail({
    to: user.email,
    subject: "Verify your Email - Elevate-X",
    text: `Hello ${user.name},\n\nPlease verify your email address by clicking on the link below:\n${verificationURL}\n\nThis link is valid for 24 hours.`,
    html: `<h3>Hello ${user.name},</h3><p>Please verify your email address by clicking on the button below:</p><a href="${verificationURL}" style="background-color:#4F46E5;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">Verify Email</a><p>This link is valid for 24 hours.</p>`,
  });
};
