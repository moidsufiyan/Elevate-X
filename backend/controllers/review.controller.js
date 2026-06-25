import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Review from "../models/Review.js";
import Booking from "../models/Booking.js";
import MentorProfile from "../models/MentorProfile.js";

export const createReview = asyncHandler(async (req, res) => {
  const { bookingId, rating, comment } = req.body;

  const booking = await Booking.findById(bookingId);
  if (!booking) {
    throw new ApiError(404, "Booking session not found");
  }

  if (booking.founderId.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to review this session");
  }

  const existingReview = await Review.findOne({ bookingId });
  if (existingReview) {
    throw new ApiError(400, "Review already submitted for this session");
  }

  const review = await Review.create({
    bookingId,
    mentorId: booking.mentorId,
    reviewerId: req.user._id,
    rating,
    comment,
  });

  const mentorId = booking.mentorId;
  const reviews = await Review.find({ mentorId });
  const reviewCount = reviews.length;
  const avgRating = reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviewCount;

  await MentorProfile.findByIdAndUpdate(mentorId, {
    rating: parseFloat(avgRating.toFixed(1)),
    reviewCount,
  });

  return res.status(201).json(new ApiResponse(201, review, "Review submitted successfully"));
});

export const getByMentor = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ mentorId: req.params.mentorId })
    .populate("reviewerId", "name avatar location")
    .sort({ createdAt: -1 });

  return res.status(200).json(new ApiResponse(200, reviews, "Reviews fetched successfully"));
});
