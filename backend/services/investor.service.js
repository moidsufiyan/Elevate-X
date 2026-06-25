import Investor from "../models/Investor.js";
import ApiError from "../utils/ApiError.js";

export const getInvestorProfile = async (userId) => {
  const profile = await Investor.findOne({ userId }).populate("userId", "name email avatar location bio").populate("portfolio", "name industry logoUrl");
  if (!profile) {
    throw new ApiError(404, "Investor profile not found");
  }
  return profile;
};

export const createInvestorProfile = async (userId, data) => {
  const existing = await Investor.findOne({ userId });
  if (existing) {
    throw new ApiError(400, "Investor profile already exists");
  }

  const profile = await Investor.create({
    userId,
    investmentFocus: data.investmentFocus || [],
    minimumInvestment: data.minimumInvestment || 0,
    maximumInvestment: data.maximumInvestment || 0,
  });

  return profile;
};

export const updateInvestorProfile = async (userId, data) => {
  const profile = await Investor.findOneAndUpdate(
    { userId },
    { $set: data },
    { new: true, runValidators: true }
  );

  if (!profile) {
    throw new ApiError(404, "Investor profile not found");
  }
  return profile;
};

export const searchInvestors = async ({ search = "", page = 1, limit = 10 }) => {
  const skip = (page - 1) * limit;
  let query = {};
  
  if (search) {
    query.investmentFocus = { $regex: search, $options: "i" };
  }

  const total = await Investor.countDocuments(query);
  const investors = await Investor.find(query)
    .populate("userId", "name avatar location bio")
    .skip(skip)
    .limit(limit);

  return { investors, total };
};
