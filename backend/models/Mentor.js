import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    expertise: {
      type: [String],
      default: [],
    },
    hourlyRate: {
      type: Number,
      default: 0,
    },
    availability: [
      {
        day: { type: String, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

mentorSchema.index({ expertise: 1 });

const Mentor = mongoose.model("Mentor", mentorSchema);
export default Mentor;
