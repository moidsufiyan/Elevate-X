import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Reply from "../models/Reply.js";
import Discussion from "../models/Discussion.js";

export const listRepliesByDiscussion = asyncHandler(async (req, res) => {
  const { discussionId } = req.params;
  
  const replies = await Reply.find({ discussionId, isDeleted: false })
    .populate("authorId", "name email avatar role")
    .sort({ createdAt: 1 });

  return res.status(200).json(new ApiResponse(200, replies, "Replies fetched successfully"));
});

export const createReply = asyncHandler(async (req, res) => {
  const { discussionId, content, parentReplyId } = req.body;

  const discussion = await Discussion.findById(discussionId);
  if (!discussion || discussion.isDeleted) {
    throw new ApiError(404, "Discussion thread not found");
  }

  const reply = await Reply.create({
    discussionId,
    authorId: req.user._id,
    content,
    parentReplyId: parentReplyId || null,
  });

  discussion.replies += 1;
  await discussion.save();

  const populatedReply = await Reply.findById(reply._id).populate("authorId", "name email avatar role");

  return res.status(201).json(new ApiResponse(201, populatedReply, "Reply posted successfully"));
});

export const deleteReply = asyncHandler(async (req, res) => {
  const reply = await Reply.findById(req.params.id);
  if (!reply || reply.isDeleted) {
    throw new ApiError(404, "Reply not found");
  }

  if (reply.authorId.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to delete this reply");
  }

  reply.isDeleted = true;
  await reply.save();

  await Discussion.findByIdAndUpdate(reply.discussionId, { $inc: { replies: -1 } });

  return res.status(200).json(new ApiResponse(200, {}, "Reply deleted successfully"));
});

export const toggleLike = asyncHandler(async (req, res) => {
  const reply = await Reply.findById(req.params.id);
  if (!reply || reply.isDeleted) {
    throw new ApiError(404, "Reply not found");
  }

  const userId = req.user._id;
  const isLiked = reply.likes.includes(userId);

  if (isLiked) {
    reply.likes = reply.likes.filter((id) => id.toString() !== userId.toString());
  } else {
    reply.likes.push(userId);
  }

  await reply.save();

  return res
    .status(200)
    .json(new ApiResponse(200, { likes: reply.likes }, isLiked ? "Unliked reply" : "Liked reply"));
});

export const acceptReply = asyncHandler(async (req, res) => {
  const reply = await Reply.findById(req.params.id);
  if (!reply || reply.isDeleted) {
    throw new ApiError(404, "Reply not found");
  }

  const discussion = await Discussion.findById(reply.discussionId);
  if (!discussion || discussion.isDeleted) {
    throw new ApiError(404, "Discussion not found");
  }

  if (discussion.authorId.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Only the author of the discussion can accept this reply");
  }

  reply.isAccepted = !reply.isAccepted;
  await reply.save();

  discussion.isSolved = reply.isAccepted;
  await discussion.save();

  return res
    .status(200)
    .json(new ApiResponse(200, reply, reply.isAccepted ? "Reply marked as accepted solution" : "Reply unaccepted"));
});
