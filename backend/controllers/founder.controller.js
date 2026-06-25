import asyncHandler from "../utils/asyncHandler.js";
import { getFounderProfile, createFounderProfile, updateFounderProfile } from "../services/founder.service.js";
import ApiResponse from "../utils/ApiResponse.js";

/**
 * @swagger
 * tags:
 *   name: Founders
 *   description: Founder profile management
 */

/**
 * @swagger
 * /founders/me:
 *   get:
 *     summary: Get current founder profile
 *     tags: [Founders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile retrieved
 */
export const getMyProfile = asyncHandler(async (req, res) => {
  const profile = await getFounderProfile(req.user._id);
  res.sendResponse(200, profile, "Founder profile retrieved");
});

/**
 * @swagger
 * /founders/me:
 *   post:
 *     summary: Create founder profile
 *     tags: [Founders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               experience:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Profile created
 */
export const createProfile = asyncHandler(async (req, res) => {
  const profile = await createFounderProfile(req.user._id, req.body);
  res.sendResponse(201, profile, "Founder profile created successfully");
});

/**
 * @swagger
 * /founders/me:
 *   patch:
 *     summary: Update founder profile
 *     tags: [Founders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               experience:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Profile updated
 */
export const updateProfile = asyncHandler(async (req, res) => {
  const profile = await updateFounderProfile(req.user._id, req.body);
  res.sendResponse(200, profile, "Founder profile updated successfully");
});

/**
 * @swagger
 * /founders/{userId}:
 *   get:
 *     summary: Get founder profile by user ID
 *     tags: [Founders]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile found
 */
export const getProfileByUserId = asyncHandler(async (req, res) => {
  const profile = await getFounderProfile(req.params.userId);
  res.sendResponse(200, profile, "Founder profile retrieved");
});
