import { Router } from "express";
import { getMatchedMentors, getMatchedStartups } from "../controllers/matching.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();

router.use(authenticate);

router.get("/mentors", getMatchedMentors);
router.get("/startups", getMatchedStartups);

export default router;
