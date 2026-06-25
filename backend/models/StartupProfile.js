import mongoose from "mongoose";

const startupProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    startupName: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String,
      default: "",
    },
    industry: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    fundingStage: {
      type: String,
      enum: ["Idea", "Pre-Seed", "Seed", "Series A", "Series B", "Series C+", "Bootstrapped", ""],
      default: "",
    },
    shortPitch: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    foundingYear: {
      type: Number,
    },
    employees: {
      type: Number,
      default: 1,
    },
    problemStatement: {
      type: String,
      default: "",
    },
    solution: {
      type: String,
      default: "",
    },
    fullStory: {
      type: String,
      default: "",
    },
    founders: [
      {
        name: String,
        role: String,
        avatar: String,
        bio: String,
      },
    ],
    traction: {
      customers: { type: String, default: "" },
      revenue: { type: String, default: "" },
      growth: { type: String, default: "" },
      partnerships: { type: String, default: "" },
    },
    roadmap: [
      {
        title: String,
        description: String,
        timeline: String,
      },
    ],
    achievements: {
      type: [String],
      default: [],
    },
    investorHighlights: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    metrics: {
      revenue: { type: Number, default: 0 },
      users: { type: Number, default: 0 },
      growth: { type: Number, default: 0 },
    },
    socialLinks: {
      linkedin: { type: String, default: "" },
      twitter: { type: String, default: "" },
      website: { type: String, default: "" },
    },
    interestedCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const StartupProfile = mongoose.model("StartupProfile", startupProfileSchema);
export default StartupProfile;
