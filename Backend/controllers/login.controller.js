import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

export const loginController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "All field are required" });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }
      const token = jwt.sign(
        process.env.JWT_SECRET,
        { userId: user._id },
        { expiresIn: "1d" }
      );
      res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
        })
        .status(200)
        .json({
          message: "Logged in successfully",
          user: { username: user.username },
        });
    } catch (error) {
      console.error(`Login error ${error.message}`);
    }
  },
};
