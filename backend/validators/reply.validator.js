import { body } from "express-validator";

export const replyValidator = [
  body("discussionId").isMongoId().withMessage("Invalid Discussion ID"),
  body("content").trim().isLength({ min: 2 }).withMessage("Reply content must be at least 2 characters long"),
  body("parentReplyId").optional({ values: "null" }).isMongoId().withMessage("Invalid parent reply ID"),
];
