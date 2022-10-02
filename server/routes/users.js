import express from "express";
import passport from "passport";
import { myProfile } from "../controller/user";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/login",
  (req, res, next) => {
    res.send("Logged In");
  }

  // Fot Temporary Commenting
  // passport.authenticate("google", {
  //   scope: ["profile"],
  //   successRedirect: process.env.FRONTEND_URL,
  // })
);

router.get("/rio", myProfile);

export default router;
