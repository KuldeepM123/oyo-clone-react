import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
  },
  { timestamps: true }
);

export const Review = mongoose.model("Review", reviewSchema);
