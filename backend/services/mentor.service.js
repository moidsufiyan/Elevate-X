import Mentor from "../models/Mentor.js";
import ApiError from "../utils/ApiError.js";

export const getMentorProfile = async (userId) => {
  const profile = await Mentor.findOne({ userId }).populate("userId", "name email avatar location bio");
  if (!profile) {
    throw new ApiError(404, "Mentor profile not found");
  }
  return profile;
};

export const createMentorProfile = async (userId, data) => {
  const existing = await Mentor.findOne({ userId });
  if (existing) {
    throw new ApiError(400, "Mentor profile already exists");
  }

  const profile = await Mentor.create({
    userId,
    expertise: data.expertise || [],
    hourlyRate: data.hourlyRate || 0,
    availability: data.availability || []
  });

  return profile;
};

export const updateMentorProfile = async (userId, data) => {
  const profile = await Mentor.findOneAndUpdate(
    { userId },
    { $set: data },
    { new: true, runValidators: true }
  );

  if (!profile) {
    throw new ApiError(404, "Mentor profile not found");
  }
  return profile;
};

export const searchMentors = async ({ search = "", page = 1, limit = 10 }) => {
  const skip = (page - 1) * limit;
  let query = {};
  
  if (search) {
    query.expertise = { $regex: search, $options: "i" };
  }

  const total = await Mentor.countDocuments(query);
  const mentors = await Mentor.find(query)
    .populate("userId", "name avatar location bio")
    .skip(skip)
    .limit(limit);

  return { mentors, total };
};
