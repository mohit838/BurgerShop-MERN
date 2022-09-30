import express from "express";
import dotenv from "dotenv";

const app = express();

export default app;

dotenv.config({
  path: "./config/.env",
});

// Import All Routes
import userRoutes from "./routes/users.js";

app.use("api/v1", userRoutes);
