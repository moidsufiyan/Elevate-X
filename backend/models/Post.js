import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    communityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
      default: null,
    },
    content: {
      type: String,
      required: true,
    },
    mediaUrls: {
      type: [String],
      default: [],
    },
    likesCount: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

postSchema.index({ authorId: 1 });
postSchema.index({ communityId: 1 });
postSchema.index({ createdAt: -1 });

const Post = mongoose.model("Post", postSchema);
export default Post;
