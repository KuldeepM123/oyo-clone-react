import User from "../models/user.js";
import bcrypt from "bcrypt";

export const userController = {
  addUser: async (req, res) => {
    try {
      const { name, email, password, phone } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(409).json({ message: "user already exist" });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = new User({
        name,
        email,
        password: hashedPassword,
        phone,
      });
      await user.save();

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Registration failed" });
    }
  },

  getAllUser: async (req, res) => {
    try {
      const allUser = await User.find();
      res.json(allUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userById = await User.findById(req.params.id);
      res.json(userById);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updateUser = await User.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deleteUser = await User.deleteOne({ _id: req.params.id });
      res.status(200).json(deleteUser);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};
