import asyncHandler from "../utils/asyncHandler.js";
import { getInvestorProfile, createInvestorProfile, updateInvestorProfile, searchInvestors } from "../services/investor.service.js";
import { parsePaginationQuery, buildPaginationMeta } from "../utils/pagination.js";
import ApiResponse from "../utils/ApiResponse.js";

/**
 * @swagger
 * tags:
 *   name: Investors
 *   description: Investor profile and search
 */

export const getMyProfile = asyncHandler(async (req, res) => {
  const profile = await getInvestorProfile(req.user._id);
  res.sendResponse(200, profile, "Investor profile retrieved");
});

export const createProfile = asyncHandler(async (req, res) => {
  const profile = await createInvestorProfile(req.user._id, req.body);
  res.sendResponse(201, profile, "Investor profile created successfully");
});

export const updateProfile = asyncHandler(async (req, res) => {
  const profile = await updateInvestorProfile(req.user._id, req.body);
  res.sendResponse(200, profile, "Investor profile updated successfully");
});

export const getProfileByUserId = asyncHandler(async (req, res) => {
  const profile = await getInvestorProfile(req.params.userId);
  res.sendResponse(200, profile, "Investor profile retrieved");
});

/**
 * @swagger
 * /investors:
 *   get:
 *     summary: Search for investors
 *     tags: [Investors]
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
 *         description: List of investors
 */
export const listInvestors = asyncHandler(async (req, res) => {
  const { page, limit } = parsePaginationQuery(req.query, 10);
  const { search } = req.query;

  const { investors, total } = await searchInvestors({ search, page, limit });
  const meta = buildPaginationMeta(total, page, limit);

  res.sendResponse(200, investors, "Investors listed successfully", meta);
});
