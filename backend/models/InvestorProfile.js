import mongoose from "mongoose";

const investorProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["VC Fund", "Angel Investor", "Family Office", "Corporate VC", "Venture Debt", ""],
      default: "",
    },
    logo: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    sectors: {
      type: [String],
      default: [],
    },
    stagePreference: {
      type: [String],
      default: [],
    },
    investmentRange: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 0 },
    },
    portfolioCompanies: {
      type: [String],
      default: [],
    },
    notableInvestments: [
      {
        company: String,
        round: String,
        amount: String,
      },
    ],
    keyPersonnel: [
      {
        name: String,
        role: String,
        avatar: String,
        bio: String,
      },
    ],
    investmentPhilosophy: {
      type: String,
      default: "",
    },
    valueAdd: {
      type: [String],
      default: [],
    },
    contactInfo: {
      email: { type: String, default: "" },
      phone: { type: String, default: "" },
      address: { type: String, default: "" },
    },
    stats: {
      totalInvestments: { type: Number, default: 0 },
      activePortfolio: { type: Number, default: 0 },
      exits: { type: Number, default: 0 },
      averageInvestment: { type: String, default: "" },
    },
    recentNews: [
      {
        title: String,
        date: String,
        summary: String,
      },
    ],
    socialLinks: {
      linkedin: { type: String, default: "" },
      twitter: { type: String, default: "" },
    },
    website: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const InvestorProfile = mongoose.model("InvestorProfile", investorProfileSchema);
export default InvestorProfile;
