import { Router } from "express";
import { createReview, getByMentor } from "../controllers/review.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();

router.get("/mentor/:mentorId", getByMentor);
router.post("/", authenticate, createReview);

export default router;
