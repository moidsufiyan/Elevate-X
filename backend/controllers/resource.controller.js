import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Resource from "../models/Resource.js";
import { deleteFile } from "../services/cloudinary.service.js";
import { parsePaginationQuery, buildPaginationMeta } from "../utils/pagination.js";

export const listResources = asyncHandler(async (req, res) => {
  const { page, limit, skip } = parsePaginationQuery(req.query, 12);
  const { category, type, difficulty, search } = req.query;

  const matchQuery = {};

  if (category) {
    matchQuery.category = category;
  }

  if (type) {
    matchQuery.type = type;
  }

  if (difficulty) {
    matchQuery.difficulty = difficulty;
  }

  if (search) {
    matchQuery.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { tags: { $regex: search, $options: "i" } },
    ];
  }

  const total = await Resource.countDocuments(matchQuery);
  const resources = await Resource.find(matchQuery)
    .populate("authorId", "name avatar role")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        resources,
        "Resources listed successfully",
        buildPaginationMeta(total, page, limit)
      )
    );
});

export const getResourceById = asyncHandler(async (req, res) => {
  const resource = await Resource.findById(req.params.id).populate("authorId", "name avatar role");
  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  return res.status(200).json(new ApiResponse(200, resource, "Resource retrieved successfully"));
});

export const createResource = asyncHandler(async (req, res) => {
  const { title, description, category, type, tags, difficulty, estimatedReadTime, sections, keyTakeaways, relatedLinks } = req.body;

  const resource = await Resource.create({
    title,
    description,
    category,
    type,
    tags,
    difficulty,
    estimatedReadTime,
    sections,
    keyTakeaways,
    relatedLinks,
    authorId: req.user._id,
    publishedAt: new Date(),
  });

  return res.status(201).json(new ApiResponse(201, resource, "Resource created successfully"));
});

export const updateResource = asyncHandler(async (req, res) => {
  const resource = await Resource.findById(req.params.id);
  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  if (resource.authorId.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to update this resource");
  }

  const updated = await Resource.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true, runValidators: true }
  );

  return res.status(200).json(new ApiResponse(200, updated, "Resource updated successfully"));
});

export const deleteResource = asyncHandler(async (req, res) => {
  const resource = await Resource.findById(req.params.id);
  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  if (resource.authorId.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to delete this resource");
  }

  if (resource.image) await deleteFile(resource.image);
  if (resource.fileUrl) await deleteFile(resource.fileUrl);

  await Resource.deleteOne({ _id: resource._id });

  return res.status(200).json(new ApiResponse(200, {}, "Resource deleted successfully"));
});

export const incrementDownload = asyncHandler(async (req, res) => {
  const resource = await Resource.findByIdAndUpdate(
    req.params.id,
    { $inc: { downloadCount: 1 } },
    { new: true }
  );

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  return res.status(200).json(new ApiResponse(200, { downloadCount: resource.downloadCount }, "Download count incremented"));
});

export const uploadFile = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(400, "Please upload a resource file");
  }

  const resource = await Resource.findById(req.params.id);
  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  if (resource.authorId.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to update this resource");
  }

  if (resource.fileUrl) {
    await deleteFile(resource.fileUrl);
  }

  resource.fileUrl = req.file.path;
  await resource.save();

  return res.status(200).json(new ApiResponse(200, resource, "File uploaded successfully"));
});
