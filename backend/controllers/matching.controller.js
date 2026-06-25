import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import MentorProfile from "../models/MentorProfile.js";
import StartupProfile from "../models/StartupProfile.js";
import { computeMatchScore } from "../services/matching.service.js";

export const getMatchedMentors = asyncHandler(async (req, res) => {
  if (req.user.role !== "founder") {
    throw new ApiError(403, "Only founders can request matched mentors");
  }

  const startupProfile = await StartupProfile.findOne({ userId: req.user._id });
  if (!startupProfile) {
    throw new ApiError(404, "Startup profile not found. Please complete your startup profile first.");
  }

  const mentors = await MentorProfile.find({ isAvailable: true }).populate("userId", "name email avatar bio location isVerified");

  const scoredMentors = mentors
    .map((mentor) => {
      const score = computeMatchScore(mentor, startupProfile);
      return { mentor, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return res.status(200).json(new ApiResponse(200, scoredMentors, "Matched mentors calculated successfully"));
});

export const getMatchedStartups = asyncHandler(async (req, res) => {
  if (req.user.role !== "mentor") {
    throw new ApiError(403, "Only mentors can request matched startups");
  }

  const mentorProfile = await MentorProfile.findOne({ userId: req.user._id });
  if (!mentorProfile) {
    throw new ApiError(404, "Mentor profile not found. Please complete your mentor profile first.");
  }

  const startups = await StartupProfile.find().populate("userId", "name email avatar bio location");

  const scoredStartups = startups
    .map((startup) => {
      const score = computeMatchScore(mentorProfile, startup);
      return { startup, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return res.status(200).json(new ApiResponse(200, scoredStartups, "Matched startups calculated successfully"));
});
