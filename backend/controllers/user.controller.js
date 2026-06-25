import asyncHandler from "../utils/asyncHandler.js";
import { parsePaginationQuery, buildPaginationMeta } from "../utils/pagination.js";
import { getUserById, updateUserProfile, softDeleteUser, listUsers } from "../services/user.service.js";
import ApiResponse from "../utils/ApiResponse.js";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User profile management
 */

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Get current logged in user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 */
export const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await getUserById(req.user._id);
  res.sendResponse(200, user, "User profile retrieved successfully");
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 */
export const getUser = asyncHandler(async (req, res) => {
  const user = await getUserById(req.params.id);
  res.sendResponse(200, user, "User retrieved successfully");
});

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List all users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Users listed successfully
 */
export const getAllUsers = asyncHandler(async (req, res) => {
  const { page, limit } = parsePaginationQuery(req.query, 10);
  const { search, role } = req.query;
  
  const { users, total } = await listUsers({ page, limit, search, role });
  const meta = buildPaginationMeta(total, page, limit);
  
  res.sendResponse(200, users, "Users retrieved successfully", meta);
});

/**
 * @swagger
 * /users/me:
 *   patch:
 *     summary: Update current user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               bio:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile updated
 */
export const updateCurrentUser = asyncHandler(async (req, res) => {
  const user = await updateUserProfile(req.user._id, req.body);
  res.sendResponse(200, user, "Profile updated successfully");
});

/**
 * @swagger
 * /users/me:
 *   delete:
 *     summary: Delete current user profile (soft delete)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Account deleted
 */
export const deleteCurrentUser = asyncHandler(async (req, res) => {
  await softDeleteUser(req.user._id);
  // Optional: clear cookies here
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.sendResponse(200, null, "Account deleted successfully");
});
