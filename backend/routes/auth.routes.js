import { Router } from "express";
import { register, login, logout, refreshToken, getMe, forgotPassword, resetPassword, verifyEmail } from "../controllers/auth.controller.js";
import { registerValidator, loginValidator, forgotPasswordValidator, resetPasswordValidator } from "../validators/auth.validator.js";
import validate from "../middlewares/validate.js";
import authenticate from "../middlewares/authenticate.js";
import { authLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/register", authLimiter, registerValidator, validate, register);
router.post("/login", authLimiter, loginValidator, validate, login);
router.post("/logout", authenticate, logout);
router.post("/refresh", refreshToken);
router.get("/me", authenticate, getMe);
router.post("/forgot-password", authLimiter, forgotPasswordValidator, validate, forgotPassword);
router.put("/reset-password/:token", resetPasswordValidator, validate, resetPassword);
router.get("/verify-email/:token", verifyEmail);

export default router;
