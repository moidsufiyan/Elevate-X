import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    recipientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["message", "booking", "like", "comment", "system"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    relatedEntityId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    relatedEntityType: {
      type: String,
      enum: ["Message", "Booking", "Post", "Comment", "System"],
    },
  },
  { timestamps: true }
);

notificationSchema.index({ recipientId: 1, read: 1 });
notificationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 }); // 30 days TTL

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
