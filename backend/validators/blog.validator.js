import { body } from "express-validator";

export const blogValidator = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("excerpt").optional().trim(),
  body("content").notEmpty().withMessage("Content is required"),
  body("category").trim().notEmpty().withMessage("Category is required"),
  body("tags").optional().isArray().withMessage("Tags must be an array of strings"),
  body("status").optional().isIn(["draft", "published", "archived"]).withMessage("Invalid status"),
];
