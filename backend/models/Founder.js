import mongoose from "mongoose";

const founderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    experience: {
      type: String,
      default: "",
    },
    skills: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Founder = mongoose.model("Founder", founderSchema);
export default Founder;
