import { body } from "express-validator";

export const resourceValidator = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  body("category").trim().notEmpty().withMessage("Category is required"),
  body("type").isIn(["pdf", "video", "article", "template", "guide"]).withMessage("Invalid resource type"),
  body("difficulty").optional().isIn(["Beginner", "Intermediate", "Advanced"]).withMessage("Invalid difficulty level"),
  body("tags").optional().isArray().withMessage("Tags must be an array of strings"),
];
