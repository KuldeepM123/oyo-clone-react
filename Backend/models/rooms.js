import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
    roomType: { type: String, required: true },
    bedType: String,
    pricePerNight: { type: Number, required: true },
    maxGuests: Number,
    amenities: [String],
    images: [String],
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Room = mongoose.model("Room", roomSchema);
