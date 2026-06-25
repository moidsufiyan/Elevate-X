import { Router } from "express";
import { getMyProfile, createProfile, updateProfile, getProfileByUserId, listMentors } from "../controllers/mentor.controller.js";
import authenticate from "../middlewares/authenticate.js";
import { authorizeRoles } from "../middlewares/authorize.js";
import validate from "../middlewares/validate.js";
import { body } from "express-validator";

const router = Router();

const profileValidator = [
  body("expertise").optional().isArray(),
  body("hourlyRate").optional().isNumeric(),
  body("availability").optional().isArray(),
];

router.get("/", listMentors);

router.get("/me", authenticate, authorizeRoles("mentor"), getMyProfile);
router.post("/me", authenticate, authorizeRoles("mentor"), profileValidator, validate, createProfile);
router.patch("/me", authenticate, authorizeRoles("mentor"), profileValidator, validate, updateProfile);

router.get("/:userId", getProfileByUserId);

export default router;
