import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    entityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    entityType: {
      type: String,
      enum: ["Startup", "Blog", "Resource", "Post", "Event"],
      required: true,
    },
  },
  { timestamps: true }
);

bookmarkSchema.index({ userId: 1, entityType: 1, entityId: 1 }, { unique: true });

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);
export default Bookmark;
