import Founder from "../models/Founder.js";
import ApiError from "../utils/ApiError.js";

export const getFounderProfile = async (userId) => {
  const profile = await Founder.findOne({ userId }).populate("userId", "name email avatar location bio");
  if (!profile) {
    throw new ApiError(404, "Founder profile not found");
  }
  return profile;
};

export const createFounderProfile = async (userId, data) => {
  const existing = await Founder.findOne({ userId });
  if (existing) {
    throw new ApiError(400, "Founder profile already exists");
  }

  const profile = await Founder.create({
    userId,
    experience: data.experience,
    skills: data.skills || []
  });

  return profile;
};

export const updateFounderProfile = async (userId, data) => {
  const profile = await Founder.findOneAndUpdate(
    { userId },
    { $set: data },
    { new: true, runValidators: true }
  );

  if (!profile) {
    throw new ApiError(404, "Founder profile not found");
  }
  return profile;
};
