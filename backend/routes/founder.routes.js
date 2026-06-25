import { Router } from "express";
import { getMyProfile, createProfile, updateProfile, getProfileByUserId } from "../controllers/founder.controller.js";
import authenticate from "../middlewares/authenticate.js";
import { authorizeRoles } from "../middlewares/authorize.js";
import validate from "../middlewares/validate.js";
import { body } from "express-validator";

const router = Router();

const profileValidator = [
  body("experience").optional().isString(),
  body("skills").optional().isArray(),
];

router.get("/me", authenticate, authorizeRoles("founder"), getMyProfile);
router.post("/me", authenticate, authorizeRoles("founder"), profileValidator, validate, createProfile);
router.patch("/me", authenticate, authorizeRoles("founder"), profileValidator, validate, updateProfile);

router.get("/:userId", getProfileByUserId);

export default router;
