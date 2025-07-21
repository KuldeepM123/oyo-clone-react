import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    address: String,
    city: String,
    state: String,
    country: String,
    zipcode: String,
    location: {
      lat: Number,
      lag: Number,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    amenities: [String],
    image: [String],
    rating: {
      type: Number,
      default: true,
    },
  },
  { timestamps: true }
);

export const Hotel = mongoose.model("Hotel", hotelSchema);
