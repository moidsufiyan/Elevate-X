import User from "../models/User.js";

const cleanExpiredTokens = async () => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const result = await User.updateMany(
      { lastLogin: { $lt: thirtyDaysAgo } },
      { $unset: { refreshToken: "" } }
    );
    console.log(`[Cron Job] Cleared refresh tokens for ${result.modifiedCount} inactive users`);
  } catch (error) {
    console.error(`[Cron Job Error] Clean expired tokens failed: ${error.message}`);
  }
};

export default cleanExpiredTokens;
