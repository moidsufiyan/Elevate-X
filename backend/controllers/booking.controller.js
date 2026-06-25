import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Booking from "../models/Booking.js";
import MentorProfile from "../models/MentorProfile.js";
import User from "../models/User.js";
import { checkSlotAvailability, generateMeetingLink } from "../services/booking.service.js";
import { sendBookingConfirmation } from "../services/email.service.js";

export const createBooking = asyncHandler(async (req, res) => {
  const { mentorId, date, timeSlot, meetingMode, topic, questions } = req.body;

  const mentor = await MentorProfile.findById(mentorId).populate("userId");
  if (!mentor) {
    throw new ApiError(404, "Mentor not found");
  }

  const isAvailable = await checkSlotAvailability(mentorId, date, timeSlot);
  if (!isAvailable) {
    throw new ApiError(400, "Mentor is already booked for this date and time slot");
  }

  const bookingPrice = mentor.hourlyRate;

  const booking = await Booking.create({
    mentorId,
    founderId: req.user._id,
    date,
    timeSlot,
    meetingMode,
    topic,
    questions,
    price: bookingPrice,
    status: "pending",
  });

  booking.meetingLink = generateMeetingLink(booking._id);
  await booking.save();

  const founder = req.user;
  sendBookingConfirmation(booking, mentor.userId, founder).catch((err) =>
    console.error(`[Booking Email Error] Failed to send email: ${err.message}`)
  );

  return res
    .status(201)
    .json(new ApiResponse(201, booking, "Mentorship session booked successfully. Pending confirmation."));
});

export const getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ founderId: req.user._id })
    .populate({
      path: "mentorId",
      populate: { path: "userId", select: "name email avatar" }
    })
    .sort({ date: -1 });

  return res.status(200).json(new ApiResponse(200, bookings, "Bookings retrieved successfully"));
});

export const getMentorBookings = asyncHandler(async (req, res) => {
  const mentorProfile = await MentorProfile.findOne({ userId: req.user._id });
  if (!mentorProfile) {
    throw new ApiError(404, "Mentor profile not found");
  }

  const bookings = await Booking.find({ mentorId: mentorProfile._id })
    .populate("founderId", "name email avatar bio")
    .sort({ date: -1 });

  return res.status(200).json(new ApiResponse(200, bookings, "Mentor sessions retrieved successfully"));
});

export const updateStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  if (!["confirmed", "completed", "cancelled"].includes(status)) {
    throw new ApiError(400, "Invalid status");
  }

  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    throw new ApiError(404, "Booking not found");
  }

  const mentorProfile = await MentorProfile.findById(booking.mentorId);
  if (!mentorProfile || (mentorProfile.userId.toString() !== req.user._id.toString() && req.user.role !== "admin")) {
    throw new ApiError(403, "You are not authorized to update this booking status");
  }

  booking.status = status;
  if (status === "confirmed" && booking.paymentStatus === "pending") {
    booking.paymentStatus = "paid";
  }
  await booking.save();

  if (status === "completed") {
    mentorProfile.totalSessions += 1;
    await mentorProfile.save();
  }

  return res.status(200).json(new ApiResponse(200, booking, `Booking marked as ${status}`));
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    throw new ApiError(404, "Booking not found");
  }

  const mentorProfile = await MentorProfile.findById(booking.mentorId);

  const isOwner =
    booking.founderId.toString() === req.user._id.toString() ||
    (mentorProfile && mentorProfile.userId.toString() === req.user._id.toString());

  if (!isOwner && req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to cancel this booking");
  }

  booking.status = "cancelled";
  await booking.save();

  return res.status(200).json(new ApiResponse(200, booking, "Booking cancelled successfully"));
});
