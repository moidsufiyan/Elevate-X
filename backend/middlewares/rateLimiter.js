import rateLimit from "express-rate-limit";

export const globalLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 900000, // 15 mins
  max: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: parseInt(process.env.AUTH_RATE_LIMIT_MAX, 10) || 10,
  message: {
    success: false,
    message: "Too many login/registration attempts, please try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
