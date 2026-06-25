import { body } from "express-validator";

export const contactValidator = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Provide a valid email address").normalizeEmail(),
  body("subject").trim().notEmpty().withMessage("Subject is required"),
  body("message").trim().notEmpty().withMessage("Message is required"),
  body("type").optional().isIn(["general", "career", "press"]).withMessage("Invalid submission type"),
];
