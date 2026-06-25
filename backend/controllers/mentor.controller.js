import asyncHandler from "../utils/asyncHandler.js";
import { getMentorProfile, createMentorProfile, updateMentorProfile, searchMentors } from "../services/mentor.service.js";
import { parsePaginationQuery, buildPaginationMeta } from "../utils/pagination.js";
import ApiResponse from "../utils/ApiResponse.js";

/**
 * @swagger
 * tags:
 *   name: Mentors
 *   description: Mentor profile and search
 */

export const getMyProfile = asyncHandler(async (req, res) => {
  const profile = await getMentorProfile(req.user._id);
  res.sendResponse(200, profile, "Mentor profile retrieved");
});

export const createProfile = asyncHandler(async (req, res) => {
  const profile = await createMentorProfile(req.user._id, req.body);
  res.sendResponse(201, profile, "Mentor profile created successfully");
});

export const updateProfile = asyncHandler(async (req, res) => {
  const profile = await updateMentorProfile(req.user._id, req.body);
  res.sendResponse(200, profile, "Mentor profile updated successfully");
});

export const getProfileByUserId = asyncHandler(async (req, res) => {
  const profile = await getMentorProfile(req.params.userId);
  res.sendResponse(200, profile, "Mentor profile retrieved");
});

/**
 * @swagger
 * /mentors:
 *   get:
 *     summary: Search for mentors
 *     tags: [Mentors]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of mentors
 */
export const listMentors = asyncHandler(async (req, res) => {
  const { page, limit } = parsePaginationQuery(req.query, 10);
  const { search } = req.query;

  const { mentors, total } = await searchMentors({ search, page, limit });
  const meta = buildPaginationMeta(total, page, limit);

  res.sendResponse(200, mentors, "Mentors listed successfully", meta);
});
