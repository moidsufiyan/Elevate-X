import mongoose from "mongoose";
import logger from "../utils/logger.js";

const connectDB = async (retries = 5, initialDelay = 2000) => {
  let currentRetry = 0;

  const tryConnect = async () => {
    try {
      const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
      });
      logger.info(`[Database] Connected successfully! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
      currentRetry++;
      logger.error(`[Database] Connection attempt ${currentRetry} failed: ${error.message}`);
      
      if (currentRetry < retries) {
        const delay = initialDelay * Math.pow(2, currentRetry - 1); // Exponential backoff
        logger.warn(`[Database] Retrying connection in ${delay / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        await tryConnect();
      } else {
        logger.error(`[Database] Fatal database connection failure after ${retries} attempts.`);
        process.exit(1);
      }
    }
  };

  await tryConnect();
};

// Graceful Shutdown handling
const gracefulShutdown = async (signal) => {
  logger.info(`\n[Server] Received ${signal}. Closing database connection...`);
  try {
    await mongoose.connection.close();
    logger.info("[Database] MongoDB connection closed due to application termination");
    process.exit(0);
  } catch (err) {
    logger.error(`[Database] Error during disconnection: ${err.message}`);
    process.exit(1);
  }
};

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

export default connectDB;
