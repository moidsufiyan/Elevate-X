import { body } from "express-validator";

export const createBookingValidator = [
  body("mentorId").isMongoId().withMessage("Invalid Mentor ID"),
  body("date").isISO8601().withMessage("Date must be a valid ISO 8601 date string"),
  body("timeSlot").matches(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).withMessage("Time slot must be in HH:mm format"),
  body("duration").optional().isInt({ min: 15, max: 180 }).withMessage("Duration must be between 15 and 180 minutes"),
  body("meetingMode").optional().isIn(["video", "phone", "inperson"]).withMessage("Meeting mode must be video, phone, or inperson"),
  body("topic").trim().notEmpty().withMessage("Topic is required"),
  body("questions").optional().trim(),
];
