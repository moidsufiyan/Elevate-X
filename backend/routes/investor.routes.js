import { Router } from "express";
import { getMyProfile, createProfile, updateProfile, getProfileByUserId, listInvestors } from "../controllers/investor.controller.js";
import authenticate from "../middlewares/authenticate.js";
import { authorizeRoles } from "../middlewares/authorize.js";
import validate from "../middlewares/validate.js";
import { body } from "express-validator";

const router = Router();

const profileValidator = [
  body("investmentFocus").optional().isArray(),
  body("minimumInvestment").optional().isNumeric(),
  body("maximumInvestment").optional().isNumeric(),
];

router.get("/", listInvestors);

router.get("/me", authenticate, authorizeRoles("investor"), getMyProfile);
router.post("/me", authenticate, authorizeRoles("investor"), profileValidator, validate, createProfile);
router.patch("/me", authenticate, authorizeRoles("investor"), profileValidator, validate, updateProfile);

router.get("/:userId", getProfileByUserId);

export default router;
