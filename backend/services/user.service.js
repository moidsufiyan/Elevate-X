import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";

export const getUserById = async (id) => {
  const user = await User.findById(id).select("-password -resetPasswordToken -resetPasswordExpire -emailVerificationToken -emailVerificationExpire");
  if (!user || user.isDeleted) {
    throw new ApiError(404, "User not found");
  }
  return user;
};

export const updateUserProfile = async (id, updateData) => {
  // Prevent updating sensitive fields via this service
  delete updateData.password;
  delete updateData.role;
  delete updateData.email; // Usually requires re-verification

  const user = await User.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true, runValidators: true }
  ).select("-password -resetPasswordToken -resetPasswordExpire -emailVerificationToken -emailVerificationExpire");

  if (!user || user.isDeleted) {
    throw new ApiError(404, "User not found");
  }
  return user;
};

export const softDeleteUser = async (id) => {
  const user = await User.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true, deletedAt: new Date() } },
    { new: true }
  );

  if (!user) {
    throw new ApiError(404, "User not found");
  }
  return user;
};

export const listUsers = async ({ page = 1, limit = 10, search = "", role = "" }) => {
  const skip = (page - 1) * limit;
  const matchQuery = { isDeleted: false };
  
  if (role) {
    matchQuery.role = role;
  }

  if (search) {
    matchQuery.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ];
  }

  const total = await User.countDocuments(matchQuery);
  const users = await User.find(matchQuery)
    .select("-password -resetPasswordToken -resetPasswordExpire -emailVerificationToken -emailVerificationExpire")
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  return { users, total };
};
