import BlogPost from "../models/BlogPost.js";

const archiveOldBlogs = async () => {
  try {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const result = await BlogPost.updateMany(
      { status: "draft", updatedAt: { $lt: sixMonthsAgo } },
      { $set: { status: "archived" } }
    );
    console.log(`[Cron Job] Archived ${result.modifiedCount} stale draft blog posts.`);
  } catch (error) {
    console.error(`[Cron Job Error] Archive old blogs failed: ${error.message}`);
  }
};

export default archiveOldBlogs;
