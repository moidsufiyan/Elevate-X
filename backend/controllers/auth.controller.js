import jwt from "jsonwebtoken";
import crypto from "crypto";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/User.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";
import { sendWelcomeEmail, sendResetPasswordEmail, sendVerificationEmail } from "../services/email.service.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
};

export const register = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "Email address already registered");
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  // Strip password and refresh token before returning
  const userResponse = await User.findById(user._id).select("-password -refreshToken");

  // Generate Email Verification Token
  const verificationToken = user.getEmailVerificationToken();
  await user.save({ validateBeforeSave: false });

  // Send non-blocking welcome email
  sendWelcomeEmail(userResponse).catch((err) => 
    console.error(`[Welcome Email Error] Failed to send email: ${err.message}`)
  );

  const protocol = req.protocol === "https" ? "https" : "http";
  const host = req.get("host")?.includes("localhost") ? "localhost:5173" : req.get("host"); // Assuming Vite frontend port
  const verificationURL = `${protocol}://${host}/auth/verify-email/${verificationToken}`;
  
  sendVerificationEmail(userResponse, verificationURL).catch((err) =>
    console.error(`[Verification Email Error] Failed to send email: ${err.message}`)
  );

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  res
    .cookie("accessToken", accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 })
    .cookie("refreshToken", refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 })
    .status(201)
    .json(
      new ApiResponse(
        201,
        { user: userResponse, accessToken, refreshToken },
        "User registered successfully"
      )
    );
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  user.refreshToken = refreshToken;
  user.lastLogin = new Date();
  await user.save();

  const userResponse = await User.findById(user._id).select("-password -refreshToken");

  res
    .cookie("accessToken", accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 })
    .cookie("refreshToken", refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 })
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: userResponse, accessToken, refreshToken },
        "Logged in successfully"
      )
    );
});

export const logout = asyncHandler(async (req, res) => {
  if (req.user) {
    const user = await User.findById(req.user._id);
    if (user) {
      user.refreshToken = undefined;
      await user.save();
    }
  }

  res
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .status(200)
    .json(new ApiResponse(200, {}, "Logged out successfully"));
});

export const refreshToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies?.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Refresh token is missing");
  }

  try {
    const decoded = jwt.verify(incomingRefreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded._id);

    if (!user || user.refreshToken !== incomingRefreshToken) {
      throw new ApiError(401, "Invalid refresh token");
    }

    const accessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    user.refreshToken = newRefreshToken;
    await user.save();

    res
      .cookie("accessToken", accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 })
      .cookie("refreshToken", newRefreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 })
      .status(200)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Tokens refreshed successfully"
        )
      );
  } catch (error) {
    throw new ApiError(401, "Invalid refresh token or token expired");
  }
});

export const getMe = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "Current user retrieved successfully"));
});

export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "There is no user with that email");
  }

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const protocol = req.protocol === "https" ? "https" : "http";
  const host = req.get("host")?.includes("localhost") ? "localhost:5173" : req.get("host");
  const resetURL = `${protocol}://${host}/auth/reset-password/${resetToken}`;

  try {
    await sendResetPasswordEmail(user, resetURL);
    res.status(200).json(new ApiResponse(200, {}, "Email sent"));
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    throw new ApiError(500, "Email could not be sent");
  }
});

export const resetPassword = asyncHandler(async (req, res) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    throw new ApiError(400, "Invalid or expired token");
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.status(200).json(new ApiResponse(200, {}, "Password updated successfully"));
});

export const verifyEmail = asyncHandler(async (req, res) => {
  const emailVerificationToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    emailVerificationToken,
    emailVerificationExpire: { $gt: Date.now() },
  });

  if (!user) {
    throw new ApiError(400, "Invalid or expired token");
  }

  user.isVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpire = undefined;
  await user.save({ validateBeforeSave: false });

  res.status(200).json(new ApiResponse(200, {}, "Email verified successfully"));
});
