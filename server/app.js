import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";

const app = express();

export default app;

dotenv.config({
  path: "./config/.env",
});

// PassportGoogle Connections
connectPassport();

// Import All Routes
import userRoutes from "./routes/users.js";

app.use("api/v1", userRoutes);
