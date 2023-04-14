import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Import routes
import adminRoutes from "./controller/admin.js";

// Load environment variables from .env file
dotenv.config();

// Get environment variables
const { DB_USER, DB_PWD } = process.env;

const app = express();

// Connect to database
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.3whe46i.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

// Middleware for parsing JSON data in request body
app.use(express.json());

// Allow cross-origin requests and allow credentials
app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  })
);

// Middleware for parsing cookies
app.use(cookieParser());

// Set up routes
app.use("/api/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
