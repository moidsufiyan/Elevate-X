import { Router } from "express";
import { getConversations, createConversation, getMessages, sendMessage, markAsRead } from "../controllers/messaging.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();

router.use(authenticate);

router.get("/conversations", getConversations);
router.post("/conversations", createConversation);
router.get("/conversations/:conversationId/messages", getMessages);
router.patch("/conversations/:conversationId/read", markAsRead);

router.post("/messages", sendMessage);

export default router;
