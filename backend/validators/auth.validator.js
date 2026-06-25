import { body } from "express-validator";

export const registerValidator = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Provide a valid email address").normalizeEmail(),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  body("role").isIn(["founder", "mentor", "investor"]).withMessage("Role must be founder, mentor, or investor"),
];

export const loginValidator = [
  body("email").isEmail().withMessage("Provide a valid email address").normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];

export const forgotPasswordValidator = [
  body("email").isEmail().withMessage("Provide a valid email address").normalizeEmail(),
];

export const resetPasswordValidator = [
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
];
