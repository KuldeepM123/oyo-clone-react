import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/routes.js";
import connectDB from "./db/dbConnect.js";

dotenv.config();
const PORT = process.env.PORT;

connectDB()

const app = express();
app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use("/api/auth", router);

app.listen(PORT, () => console.log(`Servre is running..... on port: ${PORT}`));

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("Database is connected...."))
//   .catch(() => console.log("Error connecting to database"));
