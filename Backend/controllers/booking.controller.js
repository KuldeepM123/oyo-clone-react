import User from "../models/user.js";

export const bookingController = {
  book: async (req, res) => {
    try {
      await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $addToSet: {
            booking: req.body.hotel_id,
          },
        }
      );
      res.status(200).json({ message: `Hotel Booked` });
    } catch (error) {
      res.status(417).json({ message: `Fail to Book Hotel` });
    }
  },

  cancelBooking: async (req, res) => {
    try {
      const userId = req.params.userId;
      const hotelId = req.body.hotelId;

      await User.findByIdAndUpdate(userId, {
        $pull: { booking: hotelId },
      });

      res.status(200).json({ message: "Booking canceled" });
    } catch (error) {
      res.status(500).json({ message: "Failed to cancel booking", error });
    }
  },
};
