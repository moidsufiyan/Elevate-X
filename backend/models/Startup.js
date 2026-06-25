import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
  {
    founderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      enum: ["AI", "Fintech", "Healthtech", "Edtech", "SaaS", "Other"],
      required: true,
    },
    stage: {
      type: String,
      enum: ["Idea", "MVP", "Seed", "Series A+"],
      required: true,
    },
    fundingGoal: {
      type: Number,
      min: 0,
    },
    raisedAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
    pitchDeckUrl: {
      type: String,
    },
    logoUrl: {
      type: String,
    },
    website: {
      type: String,
    },
    teamSize: {
      type: Number,
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

startupSchema.index({ name: "text", description: "text" });
startupSchema.index({ industry: 1, stage: 1 });
startupSchema.index({ founderId: 1 });

const Startup = mongoose.model("Startup", startupSchema);
export default Startup;
