import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
import User from "../models/User.js";

export const getConversations = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const conversations = await Conversation.find({
    participants: userId,
  })
    .populate("participants", "name email avatar bio role")
    .populate("lastMessageId")
    .sort({ lastMessageTimestamp: -1 });

  return res.status(200).json(new ApiResponse(200, conversations, "Conversations fetched successfully"));
});

export const createConversation = asyncHandler(async (req, res) => {
  const { participantId } = req.body;
  const userId = req.user._id;

  if (userId.toString() === participantId.toString()) {
    throw new ApiError(400, "Cannot start a conversation with yourself");
  }

  const participantExists = await User.findById(participantId);
  if (!participantExists) {
    throw new ApiError(404, "Recipient user not found");
  }

  let conversation = await Conversation.findOne({
    participants: { $all: [userId, participantId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [userId, participantId],
      unreadCounts: {
        [userId]: 0,
        [participantId]: 0,
      },
    });
  }

  const populated = await Conversation.findById(conversation._id).populate("participants", "name email avatar bio role");

  return res.status(200).json(new ApiResponse(200, populated, "Conversation retrieved/created successfully"));
});

export const getMessages = asyncHandler(async (req, res) => {
  const { conversationId } = req.params;
  const userId = req.user._id;

  const conversation = await Conversation.findOne({
    _id: conversationId,
    participants: userId,
  });

  if (!conversation) {
    throw new ApiError(403, "You are not authorized to view messages in this conversation");
  }

  const messages = await Message.find({ conversationId }).sort({ createdAt: 1 });

  return res.status(200).json(new ApiResponse(200, messages, "Messages fetched successfully"));
});

export const sendMessage = asyncHandler(async (req, res) => {
  const { conversationId, content, type, fileUrl } = req.body;
  const userId = req.user._id;

  const conversation = await Conversation.findOne({
    _id: conversationId,
    participants: userId,
  });

  if (!conversation) {
    throw new ApiError(403, "You are not authorized to send messages in this conversation");
  }

  const message = await Message.create({
    conversationId,
    senderId: userId,
    content,
    type: type || "text",
    fileUrl: fileUrl || "",
  });

  conversation.lastMessageId = message._id;
  conversation.lastMessageTimestamp = message.createdAt;

  conversation.participants.forEach((pId) => {
    if (pId.toString() !== userId.toString()) {
      const currentCount = conversation.unreadCounts.get(pId.toString()) || 0;
      conversation.unreadCounts.set(pId.toString(), currentCount + 1);
    }
  });

  await conversation.save();

  return res.status(201).json(new ApiResponse(201, message, "Message sent successfully"));
});

export const markAsRead = asyncHandler(async (req, res) => {
  const { conversationId } = req.params;
  const userId = req.user._id;

  const conversation = await Conversation.findOne({
    _id: conversationId,
    participants: userId,
  });

  if (!conversation) {
    throw new ApiError(403, "Conversation not found or unauthorized");
  }

  await Message.updateMany(
    { conversationId, senderId: { $ne: userId }, isRead: false },
    { $set: { isRead: true } }
  );

  conversation.unreadCounts.set(userId.toString(), 0);
  await conversation.save();

  return res.status(200).json(new ApiResponse(200, {}, "Conversation marked as read"));
});
