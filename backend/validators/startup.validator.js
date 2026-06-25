import { body } from "express-validator";

export const startupProfileValidator = [
  body("startupName").trim().notEmpty().withMessage("Startup Name is required"),
  body("industry").optional().trim().notEmpty().withMessage("Industry cannot be empty"),
  body("location").optional().trim(),
  body("fundingStage").optional().isIn(["Idea", "Pre-Seed", "Seed", "Series A", "Series B", "Series C+", "Bootstrapped", ""]).withMessage("Invalid funding stage"),
  body("shortPitch").optional().trim(),
  body("description").optional().trim(),
  body("website").optional({ values: "falsy" }).trim().isURL().withMessage("Website must be a valid URL"),
  body("foundingYear").optional().isInt({ min: 1800, max: new Date().getFullYear() }).withMessage("Invalid founding year"),
  body("employees").optional().isInt({ min: 1 }).withMessage("Employee count must be at least 1"),
];
