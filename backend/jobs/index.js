import cron from "node-cron";
import cleanExpiredTokens from "./cleanExpiredTokens.js";
import sendSessionReminders from "./sendSessionReminders.js";
import archiveOldBlogs from "./archiveOldBlogs.js";

export const initJobs = () => {
  console.log("[Jobs] Initializing cron job scheduler...");

  // Run nightly at midnight (0 0 * * *)
  cron.schedule("0 0 * * *", () => {
    console.log("[Jobs] Running nightly cleanExpiredTokens job...");
    cleanExpiredTokens();
  });

  // Run hourly (0 * * * *)
  cron.schedule("0 * * * *", () => {
    console.log("[Jobs] Running hourly sendSessionReminders job...");
    sendSessionReminders();
  });

  // Run monthly on the 1st at 1:00 AM (0 1 1 * *)
  cron.schedule("0 1 1 * *", () => {
    console.log("[Jobs] Running monthly archiveOldBlogs job...");
    archiveOldBlogs();
  });

  console.log("[Jobs] Cron jobs scheduled successfully.");
};
