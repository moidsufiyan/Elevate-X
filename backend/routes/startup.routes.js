import { Router } from "express";
import { getStartup, create, update, list, remove } from "../controllers/startup.controller.js";
import authenticate from "../middlewares/authenticate.js";
import { authorizeRoles } from "../middlewares/authorize.js";
import validate from "../middlewares/validate.js";
import { body } from "express-validator";

const router = Router();

const startupValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("industry").isIn(["AI", "Fintech", "Healthtech", "Edtech", "SaaS", "Other"]).withMessage("Invalid industry"),
  body("stage").isIn(["Idea", "MVP", "Seed", "Series A+"]).withMessage("Invalid stage"),
  body("fundingGoal").optional().isNumeric(),
  body("raisedAmount").optional().isNumeric(),
  body("website").optional().isURL(),
];

const updateValidator = [
  body("name").optional().notEmpty(),
  body("description").optional().notEmpty(),
  body("industry").optional().isIn(["AI", "Fintech", "Healthtech", "Edtech", "SaaS", "Other"]),
  body("stage").optional().isIn(["Idea", "MVP", "Seed", "Series A+"]),
];

router.get("/", list);
router.get("/:id", getStartup);

router.post("/", authenticate, authorizeRoles("founder"), startupValidator, validate, create);
router.patch("/:id", authenticate, authorizeRoles("founder"), updateValidator, validate, update);
router.delete("/:id", authenticate, authorizeRoles("founder"), remove);

export default router;
