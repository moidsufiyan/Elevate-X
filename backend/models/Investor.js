import mongoose from "mongoose";

const investorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    investmentFocus: {
      type: [String],
      default: [],
    },
    minimumInvestment: {
      type: Number,
      default: 0,
    },
    maximumInvestment: {
      type: Number,
      default: 0,
    },
    portfolio: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Startup",
      },
    ],
    verifiedInvestor: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

investorSchema.index({ investmentFocus: 1 });

const Investor = mongoose.model("Investor", investorSchema);
export default Investor;
