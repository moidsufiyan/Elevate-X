import { Router } from "express";
import { listRepliesByDiscussion, createReply, deleteReply, toggleLike, acceptReply } from "../controllers/reply.controller.js";
import { replyValidator } from "../validators/reply.validator.js";
import validate from "../middlewares/validate.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();

router.get("/discussion/:discussionId", listRepliesByDiscussion);

router.post("/", authenticate, replyValidator, validate, createReply);
router.delete("/:id", authenticate, deleteReply);
router.post("/:id/like", authenticate, toggleLike);
router.patch("/:id/accept", authenticate, acceptReply);

export default router;
