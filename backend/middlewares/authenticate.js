import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/User.js";

const authenticate = asyncHandler(async (req, res, next) => {
  let token = req.cookies?.accessToken;

  if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    throw new ApiError(401, "Authentication credentials missing");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select("-password -refreshToken");
    if (!user) {
      throw new ApiError(401, "User associated with this token no longer exists");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid access token or token expired");
  }
});

export default authenticate;
