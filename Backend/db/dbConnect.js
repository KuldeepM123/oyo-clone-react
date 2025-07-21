import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(`${URI}/${DB_NAME}`);
    console.log(`\nMongoDB Connected ...!!`);
  } catch (error) {
    console.error("MONGODB Connction error", error);
    process.exit(1);
  }
};
export default connectDB;
