import redisClient from "../config/redis.js";

/**
 * Cache middleware for Express routes
 * @param {number} duration - Time to live in seconds
 */
export const cache = (duration) => {
  return async (req, res, next) => {
    // Only cache GET requests
    if (req.method !== "GET") {
      return next();
    }

    const key = `__express__${req.originalUrl || req.url}`;
    
    try {
      if (redisClient.isReady) {
        const cachedResponse = await redisClient.get(key);
        if (cachedResponse) {
          return res.send(JSON.parse(cachedResponse));
        } else {
          // Wrap res.send
          const originalSend = res.send;
          res.send = function (body) {
            // Only cache successful responses
            if (res.statusCode >= 200 && res.statusCode < 300) {
              redisClient.setEx(key, duration, JSON.stringify(body)).catch(err => {
                console.error(`[Redis] Error setting cache for ${key}:`, err);
              });
            }
            originalSend.call(this, body);
          };
          next();
        }
      } else {
        // Fallback if Redis is down
        next();
      }
    } catch (error) {
      console.error("[Redis] Cache middleware error:", error);
      next(); // Continue even if cache fails
    }
  };
};

export const clearCache = async (keyPattern) => {
  if (!redisClient.isReady) return;
  try {
    const keys = await redisClient.keys(`__express__${keyPattern}`);
    if (keys.length > 0) {
      await redisClient.del(keys);
    }
  } catch (error) {
    console.error(`[Redis] Error clearing cache for ${keyPattern}:`, error);
  }
};
