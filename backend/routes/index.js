import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import mentorRoutes from "./mentor.routes.js";
import founderRoutes from "./founder.routes.js";
import startupRoutes from "./startup.routes.js";
import investorRoutes from "./investor.routes.js";
import bookingRoutes from "./booking.routes.js";
import reviewRoutes from "./review.routes.js";
import discussionRoutes from "./discussion.routes.js";
import replyRoutes from "./reply.routes.js";
import messagingRoutes from "./messaging.routes.js";
import blogRoutes from "./blog.routes.js";
import resourceRoutes from "./resource.routes.js";
import matchingRoutes from "./matching.routes.js";
import contactRoutes from "./contact.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/mentors", mentorRoutes);
router.use("/founders", founderRoutes);
router.use("/startups", startupRoutes);
router.use("/investors", investorRoutes);
router.use("/bookings", bookingRoutes);
router.use("/reviews", reviewRoutes);
router.use("/discussions", discussionRoutes);
router.use("/replies", replyRoutes);
router.use("/messaging", messagingRoutes);
router.use("/blog", blogRoutes);
router.use("/resources", resourceRoutes);
router.use("/matching", matchingRoutes);
router.use("/contact", contactRoutes);

export default router;
