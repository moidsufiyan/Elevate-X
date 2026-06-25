import { body } from "express-validator";

export const discussionValidator = [
  body("title").trim().isLength({ min: 5, max: 100 }).withMessage("Title must be between 5 and 100 characters long"),
  body("content").trim().isLength({ min: 10 }).withMessage("Content must be at least 10 characters long"),
  body("category").isIn([
    "General Discussion",
    "Startup Funding",
    "Product Dev",
    "Marketing & Sales",
    "Tech Stack",
    "Hiring & Culture",
    "Mentorship Advice",
    "Pitch Feedback",
  ]).withMessage("Invalid category"),
  body("tags").optional().isArray().withMessage("Tags must be an array of strings"),
];
