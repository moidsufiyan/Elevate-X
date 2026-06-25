import mongoose from "mongoose";

const availabilityPatternSchema = new mongoose.Schema({
  day: {
    type: Number, // 0 = Sunday, 6 = Saturday
    required: true,
  },
  slots: [
    {
      type: String, // "HH:mm"
      required: true,
    },
  ],
});

const mentorProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    company: {
      type: String,
      default: "",
    },
    expertise: {
      type: [String],
      default: [],
    },
    industries: {
      type: [String],
      default: [],
    },
    languages: {
      type: [String],
      default: [],
    },
    specialties: {
      type: [String],
      default: [],
    },
    experience: {
      type: Number,
      default: 0,
    },
    hourlyRate: {
      type: Number,
      default: 0,
    },
    availableTimes: {
      type: String,
      default: "",
    },
    timeZone: {
      type: String,
      default: "Asia/Kolkata",
    },
    availabilityPattern: {
      type: [availabilityPatternSchema],
      default: [],
    },
    rating: {
      type: Number,
      default: 5.0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    totalSessions: {
      type: Number,
      default: 0,
    },
    achievements: {
      type: [String],
      default: [],
    },
    education: [
      {
        degree: String,
        school: String,
        year: Number,
      },
    ],
    successStories: [
      {
        startup: String,
        description: String,
      },
    ],
    badges: [
      {
        label: String,
        variant: String,
      },
    ],
    tags: {
      type: [String],
      default: [],
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const MentorProfile = mongoose.model("MentorProfile", mentorProfileSchema);
export default MentorProfile;
