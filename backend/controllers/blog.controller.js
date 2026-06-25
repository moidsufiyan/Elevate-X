import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import BlogPost from "../models/BlogPost.js";
import makeSlug from "../utils/slugify.js";
import { deleteFile } from "../services/cloudinary.service.js";
import { parsePaginationQuery, buildPaginationMeta } from "../utils/pagination.js";

export const listPosts = asyncHandler(async (req, res) => {
  const { page, limit, skip } = parsePaginationQuery(req.query, 10);
  const { category, tag, authorId, search, status, sort } = req.query;

  const matchQuery = {};

  if (req.user && (req.user.role === "admin" || req.user.role === "mentor")) {
    if (status) {
      matchQuery.status = status;
    }
  } else {
    matchQuery.status = "published";
  }

  if (category) {
    matchQuery.category = category;
  }

  if (tag) {
    matchQuery.tags = { $in: tag.split(",") };
  }

  if (authorId) {
    matchQuery.authorId = authorId;
  }

  if (search) {
    matchQuery.$or = [
      { title: { $regex: search, $options: "i" } },
      { excerpt: { $regex: search, $options: "i" } },
      { content: { $regex: search, $options: "i" } },
    ];
  }

  let sortQuery = { publishedAt: -1, createdAt: -1 };
  if (sort === "popular") {
    sortQuery = { views: -1 };
  } else if (sort === "featured") {
    sortQuery = { featured: -1, publishedAt: -1 };
  }

  const total = await BlogPost.countDocuments(matchQuery);
  const posts = await BlogPost.find(matchQuery)
    .populate("authorId", "name email avatar role")
    .sort(sortQuery)
    .skip(skip)
    .limit(limit);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        posts,
        "Blog posts fetched successfully",
        buildPaginationMeta(total, page, limit)
      )
    );
});

export const getPost = asyncHandler(async (req, res) => {
  const { idOrSlug } = req.params;

  const isMongoId = idOrSlug.match(/^[0-9a-fA-F]{24}$/);
  const query = isMongoId ? { _id: idOrSlug } : { slug: idOrSlug };

  const post = await BlogPost.findOneAndUpdate(
    query,
    { $inc: { views: 1 } },
    { new: true }
  ).populate("authorId", "name email avatar role");

  if (!post) {
    throw new ApiError(404, "Blog post not found");
  }

  if (post.status !== "published" && (!req.user || (req.user._id.toString() !== post.authorId._id.toString() && req.user.role !== "admin"))) {
    throw new ApiError(403, "You are not authorized to view this draft blog post");
  }

  return res.status(200).json(new ApiResponse(200, post, "Blog post fetched successfully"));
});

export const createPost = asyncHandler(async (req, res) => {
  const { title, excerpt, content, category, tags, status, featured } = req.body;

  let slug = makeSlug(title);
  const existingSlug = await BlogPost.findOne({ slug });
  if (existingSlug) {
    slug = `${slug}-${Date.now()}`;
  }

  const post = await BlogPost.create({
    title,
    slug,
    excerpt,
    content,
    category,
    tags,
    status: status || "draft",
    featured: featured || false,
    authorId: req.user._id,
    publishedAt: status === "published" ? new Date() : null,
  });

  return res.status(201).json(new ApiResponse(201, post, "Blog post created successfully"));
});

export const updatePost = asyncHandler(async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) {
    throw new ApiError(404, "Blog post not found");
  }

  if (post.authorId.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to update this blog post");
  }

  const { title, excerpt, content, category, tags, status, featured } = req.body;

  if (title && title !== post.title) {
    post.title = title;
    let slug = makeSlug(title);
    const existingSlug = await BlogPost.findOne({ slug, _id: { $ne: post._id } });
    if (existingSlug) {
      slug = `${slug}-${Date.now()}`;
    }
    post.slug = slug;
  }

  if (excerpt !== undefined) post.excerpt = excerpt;
  if (content !== undefined) post.content = content;
  if (category !== undefined) post.category = category;
  if (tags !== undefined) post.tags = tags;
  if (featured !== undefined) post.featured = featured;

  if (status && status !== post.status) {
    post.status = status;
    if (status === "published" && !post.publishedAt) {
      post.publishedAt = new Date();
    }
  }

  await post.save();

  return res.status(200).json(new ApiResponse(200, post, "Blog post updated successfully"));
});

export const deletePost = asyncHandler(async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) {
    throw new ApiError(404, "Blog post not found");
  }

  if (post.authorId.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to delete this blog post");
  }

  if (post.coverImage) {
    await deleteFile(post.coverImage);
  }

  await BlogPost.deleteOne({ _id: post._id });

  return res.status(200).json(new ApiResponse(200, {}, "Blog post deleted successfully"));
});

export const uploadCover = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(400, "Please upload a cover image file");
  }

  const post = await BlogPost.findById(req.params.id);
  if (!post) {
    throw new ApiError(404, "Blog post not found");
  }

  if (post.authorId.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to update this blog post");
  }

  if (post.coverImage) {
    await deleteFile(post.coverImage);
  }

  post.coverImage = req.file.path;
  await post.save();

  return res.status(200).json(new ApiResponse(200, post, "Cover image uploaded successfully"));
});

export const toggleLike = asyncHandler(async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) {
    throw new ApiError(404, "Blog post not found");
  }

  const userId = req.user._id;
  const isLiked = post.likes.includes(userId);

  if (isLiked) {
    post.likes = post.likes.filter((id) => id.toString() !== userId.toString());
  } else {
    post.likes.push(userId);
  }

  await post.save();

  return res
    .status(200)
    .json(new ApiResponse(200, { likes: post.likes }, isLiked ? "Post unliked" : "Post liked"));
});
