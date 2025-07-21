import { Hotel } from "../models/hotel.js";

export const hotelController = {
  getAllHotel: async (req, res) => {
    try {
      const allHotel = await Hotel.find();
      res.json(allHotel);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getHotelById: async (req, res) => {
    try {
      const hotelById = await Hotel.findById(req.params.id);
      res.json(hotelById);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  addHotel: async (req, res) => {
    try {
      const {
        name,
        price,
        city,
        images,
        facilities,
        star,
        connectivity,
        accessibility,
      } = req.body;

      // Check if hotel with same name already exists
      const existingHotel = await Hotel.findOne({ name });
      if (existingHotel) {
        return res.status(409).json({ message: "Hotel already exists" });
      }

      // Create and save new hotel
      const newHotel = new Hotel({
        name,
        price,
        city,
        images,
        rating: 0,
        reviews: 0,
        facilities,
        star,
        connectivity,
        accessibility,
      });

      await newHotel.save();

      res.status(201).json({ message: "Hotel created", hotel: newHotel });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateHotel: async (req, res) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      if (!updatedHotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }
      res.status(200).json(updatedHotel);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  deletHotel: async (req, res) => {
    try {
      const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
      if (!deletedHotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }
      res.status(200).json({ message: "Hotel deleted successfully" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};
