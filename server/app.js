import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";

const app = express();

export default app;

dotenv.config({
  path: "./config/.env",
});

// Using Middlewares

// **Note: Use "Session" Before User "Passport("session")"
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

// PassportGoogle Connections
connectPassport();

// Import All Routes
import userRoutes from "./routes/users.js";

app.use("/api/v1", userRoutes);
