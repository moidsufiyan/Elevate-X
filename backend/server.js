import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { validateEnv } from "./config/env.js";
import connectDB from "./config/db.js";
import { connectRedis } from "./config/redis.js";
import corsOptions from "./config/cors.js";
import requestLogger from "./middlewares/requestLogger.js";
import responseHandler from "./middlewares/responseHandler.js";
import { globalLimiter } from "./middlewares/rateLimiter.js";
import apiRouter from "./routes/index.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import { initJobs } from "./jobs/index.js";
import { seedDatabase } from "./utils/seeder.js";
import logger from "./utils/logger.js";
import { setupSwagger } from "./config/swagger.js";

// Validate environment variables on boot
validateEnv();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Databases (Mongo & Redis)
Promise.all([connectDB(), connectRedis()]).then(() => {
  // Seed Investor Profiles if database is empty
  seedDatabase();
});

// Middlewares
app.use(helmet());
app.use(compression());
app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(requestLogger);
app.use(responseHandler);
app.use(globalLimiter);

// Health Check
app.get("/health", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "connected" : mongoose.connection.readyState === 2 ? "connecting" : "disconnected";
  // Now we can use our global response handler for consistency, though raw json is fine too.
  res.sendResponse(200, { uptime: process.uptime(), dbStatus }, "Elevate-X Backend is healthy and running");
});

// Mount API router
app.use("/api/v1", apiRouter);

// Not Found Handler
app.use(notFound);

// Setup Swagger UI Documentation
setupSwagger(app);

// Global Error Handler
app.use(errorHandler);

// Initialize scheduled background jobs
initJobs();

// Start Server
app.listen(PORT, () => {
  logger.info("=================================================");
  logger.info(`[Server] Elevate-X Server listening on port ${PORT}`);
  logger.info(`[Server] Active Environment: ${process.env.NODE_ENV}`);
  logger.info("=================================================");
});
