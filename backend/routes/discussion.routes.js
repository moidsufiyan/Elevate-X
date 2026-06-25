import { Router } from "express";
import { listDiscussions, getDiscussionById, createDiscussion, updateDiscussion, deleteDiscussion, toggleLike, pinDiscussion } from "../controllers/discussion.controller.js";
import { discussionValidator } from "../validators/discussion.validator.js";
import validate from "../middlewares/validate.js";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/authorize.js";

const router = Router();

router.get("/", listDiscussions);
router.get("/:id", getDiscussionById);

router.post("/", authenticate, discussionValidator, validate, createDiscussion);
router.put("/:id", authenticate, discussionValidator, validate, updateDiscussion);
router.delete("/:id", authenticate, deleteDiscussion);
router.post("/:id/like", authenticate, toggleLike);
router.patch("/:id/pin", authenticate, authorize("admin"), pinDiscussion);

export default router;
