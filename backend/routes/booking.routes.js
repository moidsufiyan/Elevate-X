import { Router } from "express";
import { createBooking, getMyBookings, getMentorBookings, updateStatus, cancelBooking } from "../controllers/booking.controller.js";
import { createBookingValidator } from "../validators/booking.validator.js";
import validate from "../middlewares/validate.js";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/authorize.js";

const router = Router();

router.use(authenticate);

router.post("/", authorize("founder"), createBookingValidator, validate, createBooking);
router.get("/my", getMyBookings);
router.get("/mentor", authorize("mentor", "admin"), getMentorBookings);
router.patch("/:id/status", authorize("mentor", "admin"), updateStatus);
router.delete("/:id", cancelBooking);

export default router;
