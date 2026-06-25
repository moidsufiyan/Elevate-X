import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Discussion from "../models/Discussion.js";
import { parsePaginationQuery, buildPaginationMeta } from "../utils/pagination.js";

export const listDiscussions = asyncHandler(async (req, res) => {
  const { page, limit, skip } = parsePaginationQuery(req.query, 15);
  const { category, tag, search, sort } = req.query;

  const matchQuery = { isDeleted: false };

  if (category) {
    matchQuery.category = category;
  }

  if (tag) {
    matchQuery.tags = { $in: tag.split(",") };
  }

  if (search) {
    matchQuery.$or = [
      { title: { $regex: search, $options: "i" } },
      { content: { $regex: search, $options: "i" } },
    ];
  }

  let sortQuery = { isPinned: -1, createdAt: -1 };
  if (sort === "popular") {
    sortQuery = { isPinned: -1, views: -1 };
  } else if (sort === "likes") {
    sortQuery = { isPinned: -1, likes: -1 };
  }

  const total = await Discussion.countDocuments(matchQuery);
  const discussions = await Discussion.find(matchQuery)
    .populate("authorId", "name email avatar role")
    .sort(sortQuery)
    .skip(skip)
    .limit(limit);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        discussions,
        "Discussions listed successfully",
        buildPaginationMeta(total, page, limit)
      )
    );
});

export const getDiscussionById = asyncHandler(async (req, res) => {
  const discussion = await Discussion.findOneAndUpdate(
    { _id: req.params.id, isDeleted: false },
    { $inc: { views: 1 } },
    { new: true }
  ).populate("authorId", "name email avatar role");

  if (!discussion) {
    throw new ApiError(404, "Discussion not found");
  }

  return res.status(200).json(new ApiResponse(200, discussion, "Discussion retrieved successfully"));
});

export const createDiscussion = asyncHandler(async (req, res) => {
  const { title, content, category, tags } = req.body;

  const discussion = await Discussion.create({
    title,
    content,
    category,
    tags,
    authorId: req.user._id,
  });

  return res.status(201).json(new ApiResponse(201, discussion, "Discussion created successfully"));
});

export const updateDiscussion = asyncHandler(async (req, res) => {
  const discussion = await Discussion.findById(req.params.id);
  if (!discussion || discussion.isDeleted) {
    throw new ApiError(404, "Discussion not found");
  }

  if (discussion.authorId.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to update this discussion");
  }

  const { title, content, category, tags } = req.body;
  if (title) discussion.title = title;
  if (content) discussion.content = content;
  if (category) discussion.category = category;
  if (tags) discussion.tags = tags;

  await discussion.save();

  return res.status(200).json(new ApiResponse(200, discussion, "Discussion updated successfully"));
});

export const deleteDiscussion = asyncHandler(async (req, res) => {
  const discussion = await Discussion.findById(req.params.id);
  if (!discussion || discussion.isDeleted) {
    throw new ApiError(404, "Discussion not found");
  }

  if (discussion.authorId.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to delete this discussion");
  }

  discussion.isDeleted = true;
  await discussion.save();

  return res.status(200).json(new ApiResponse(200, {}, "Discussion deleted successfully"));
});

export const toggleLike = asyncHandler(async (req, res) => {
  const discussion = await Discussion.findById(req.params.id);
  if (!discussion || discussion.isDeleted) {
    throw new ApiError(404, "Discussion not found");
  }

  const userId = req.user._id;
  const isLiked = discussion.likes.includes(userId);

  if (isLiked) {
    discussion.likes = discussion.likes.filter((id) => id.toString() !== userId.toString());
  } else {
    discussion.likes.push(userId);
  }

  await discussion.save();

  return res
    .status(200)
    .json(new ApiResponse(200, { likes: discussion.likes }, isLiked ? "Unliked successfully" : "Liked successfully"));
});

export const pinDiscussion = asyncHandler(async (req, res) => {
  const { isPinned } = req.body;
  const discussion = await Discussion.findByIdAndUpdate(
    req.params.id,
    { isPinned },
    { new: true }
  );

  if (!discussion || discussion.isDeleted) {
    throw new ApiError(404, "Discussion not found");
  }

  return res.status(200).json(new ApiResponse(200, discussion, isPinned ? "Discussion pinned" : "Discussion unpinned"));
});
