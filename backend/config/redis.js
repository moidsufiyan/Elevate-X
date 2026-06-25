import { createClient } from "redis";
import logger from "../utils/logger.js"; // Assuming we have a logger, fallback to console if not

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

const redisClient = createClient({
  url: REDIS_URL,
  socket: {
    reconnectStrategy: (retries) => {
      // In development, stop retrying after 3 attempts to prevent log spamming
      if (process.env.NODE_ENV === "development" && retries > 3) {
        if (logger) {
          logger.warn("[Redis] Maximum reconnect attempts reached. Caching will remain disabled.");
        }
        return false; // stops reconnecting
      }
      return Math.min(retries * 100, 3000);
    },
  },
});

redisClient.on("error", (err) => {
  if (logger) {
    logger.error(`[Redis] Connection Error: ${err.message}`);
  } else {
    console.error(`[Redis] Connection Error: ${err.message}`);
  }
});

redisClient.on("connect", () => {
  if (logger) {
    logger.info("[Redis] Connected Successfully");
  } else {
    console.log("[Redis] Connected Successfully");
  }
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
  } catch (error) {
    if (logger) {
      logger.warn("[Redis] Failed to connect on startup. Caching will be bypassed.");
    } else {
      console.warn("[Redis] Failed to connect on startup. Caching will be bypassed.");
    }
  }
};

export default redisClient;
