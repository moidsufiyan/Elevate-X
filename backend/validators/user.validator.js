import { body } from "express-validator";

export const updateProfileValidator = [
  body("name").optional().trim().notEmpty().withMessage("Name cannot be empty"),
  body("bio").optional().trim(),
  body("location").optional().trim(),
  body("phone").optional().trim(),
  body("socialLinks.linkedin").optional({ values: "falsy" }).trim().isURL().withMessage("LinkedIn URL must be a valid URL"),
  body("socialLinks.twitter").optional({ values: "falsy" }).trim().isURL().withMessage("Twitter URL must be a valid URL"),
  body("socialLinks.github").optional({ values: "falsy" }).trim().isURL().withMessage("Github URL must be a valid URL"),
  body("socialLinks.website").optional({ values: "falsy" }).trim().isURL().withMessage("Website URL must be a valid URL"),
];
