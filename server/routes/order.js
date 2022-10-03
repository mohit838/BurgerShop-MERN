import express from "express";

import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createorder", isAuthenticated, placeOrder);

export default router;
