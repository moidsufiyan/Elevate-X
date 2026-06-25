import { Router } from "express";
import { getCurrentUser, getUser, getAllUsers, updateCurrentUser, deleteCurrentUser } from "../controllers/user.controller.js";
import authenticate from "../middlewares/authenticate.js";
import { authorizeRoles } from "../middlewares/authorize.js";
// Re-using common validation if needed, or simple direct calls
import validate from "../middlewares/validate.js";
import { body } from "express-validator";

const router = Router();

const updateProfileValidator = [
  body("name").optional().trim().notEmpty().withMessage("Name cannot be empty if provided"),
  body("bio").optional().trim().isString(),
  body("location").optional().trim().isString(),
];

// Public / general user lookup
router.get("/", getAllUsers);
router.get("/:id", getUser); // Note: Should probably be placed after /me if /me was not hardcoded, but standard routing puts specific routes first or last depending on dynamic params. Let's make sure /me goes first.

// In Express, specific routes like /me must come before parameterized routes like /:id
const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/me", authenticate, getCurrentUser);
userRouter.patch("/me", authenticate, updateProfileValidator, validate, updateCurrentUser);
userRouter.delete("/me", authenticate, deleteCurrentUser);
userRouter.get("/:id", getUser); 

export default userRouter;
