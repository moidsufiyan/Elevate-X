import { body } from "express-validator";

export const mentorProfileValidator = [
  body("company").optional().trim().notEmpty().withMessage("Company cannot be empty"),
  body("expertise").optional().isArray().withMessage("Expertise must be an array of strings"),
  body("industries").optional().isArray().withMessage("Industries must be an array of strings"),
  body("languages").optional().isArray().withMessage("Languages must be an array of strings"),
  body("specialties").optional().isArray().withMessage("Specialties must be an array of strings"),
  body("experience").optional().isInt({ min: 0 }).withMessage("Experience must be a non-negative integer"),
  body("hourlyRate").optional().isFloat({ min: 0 }).withMessage("Hourly rate must be a non-negative number"),
  body("availableTimes").optional().trim(),
  body("timeZone").optional().trim().notEmpty().withMessage("TimeZone cannot be empty"),
];
