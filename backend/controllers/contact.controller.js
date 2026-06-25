import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ContactSubmission from "../models/ContactSubmission.js";
import { sendContactAcknowledgement } from "../services/email.service.js";

export const submitForm = asyncHandler(async (req, res) => {
  const { name, email, subject, message, type } = req.body;
  const ipAddress = req.ip || req.headers["x-forwarded-for"] || "";

  const submission = await ContactSubmission.create({
    name,
    email,
    subject,
    message,
    type: type || "general",
    ipAddress,
  });

  sendContactAcknowledgement(submission).catch((err) =>
    console.error(`[Contact Email Error] Failed to send email: ${err.message}`)
  );

  return res.status(201).json(new ApiResponse(201, submission, "Contact query submitted successfully"));
});
