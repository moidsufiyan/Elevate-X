import asyncHandler from "../utils/asyncHandler.js";
import { getStartupById, createStartup, updateStartup, listStartups, deleteStartup } from "../services/startup.service.js";
import { parsePaginationQuery, buildPaginationMeta } from "../utils/pagination.js";
import ApiResponse from "../utils/ApiResponse.js";

/**
 * @swagger
 * tags:
 *   name: Startups
 *   description: Startup profiles management
 */

export const getStartup = asyncHandler(async (req, res) => {
  const startup = await getStartupById(req.params.id);
  res.sendResponse(200, startup, "Startup retrieved successfully");
});

export const create = asyncHandler(async (req, res) => {
  const startup = await createStartup(req.user._id, req.body);
  res.sendResponse(201, startup, "Startup created successfully");
});

export const update = asyncHandler(async (req, res) => {
  const startup = await updateStartup(req.params.id, req.user._id, req.body);
  res.sendResponse(200, startup, "Startup updated successfully");
});

export const list = asyncHandler(async (req, res) => {
  const { page, limit } = parsePaginationQuery(req.query, 10);
  const { search, industry, stage } = req.query;

  const { startups, total } = await listStartups({ search, industry, stage, page, limit });
  const meta = buildPaginationMeta(total, page, limit);

  res.sendResponse(200, startups, "Startups listed successfully", meta);
});

export const remove = asyncHandler(async (req, res) => {
  await deleteStartup(req.params.id, req.user._id);
  res.sendResponse(200, null, "Startup deleted successfully");
});
