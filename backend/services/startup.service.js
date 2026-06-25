import Startup from "../models/Startup.js";
import ApiError from "../utils/ApiError.js";

export const getStartupById = async (id) => {
  const startup = await Startup.findById(id).populate("founderId", "name email avatar");
  if (!startup || startup.isDeleted) {
    throw new ApiError(404, "Startup not found");
  }
  return startup;
};

export const createStartup = async (founderId, data) => {
  const existing = await Startup.findOne({ founderId });
  if (existing) {
    throw new ApiError(400, "Founder already has a startup profile");
  }

  const startup = await Startup.create({
    founderId,
    name: data.name,
    description: data.description,
    industry: data.industry,
    stage: data.stage,
    fundingGoal: data.fundingGoal,
    raisedAmount: data.raisedAmount,
    website: data.website,
    teamSize: data.teamSize,
  });

  return startup;
};

export const updateStartup = async (id, founderId, data) => {
  const startup = await Startup.findOneAndUpdate(
    { _id: id, founderId },
    { $set: data },
    { new: true, runValidators: true }
  );

  if (!startup || startup.isDeleted) {
    throw new ApiError(404, "Startup not found or unauthorized");
  }
  return startup;
};

export const listStartups = async ({ search = "", industry = "", stage = "", page = 1, limit = 10 }) => {
  const skip = (page - 1) * limit;
  let query = { isDeleted: false };
  
  if (search) {
    query.$text = { $search: search };
  }
  if (industry) {
    query.industry = industry;
  }
  if (stage) {
    query.stage = stage;
  }

  const total = await Startup.countDocuments(query);
  const startups = await Startup.find(query)
    .populate("founderId", "name avatar")
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  return { startups, total };
};

export const deleteStartup = async (id, founderId) => {
  const startup = await Startup.findOneAndUpdate(
    { _id: id, founderId },
    { $set: { isDeleted: true, deletedAt: new Date() } },
    { new: true }
  );

  if (!startup) {
    throw new ApiError(404, "Startup not found or unauthorized");
  }
  return startup;
};
