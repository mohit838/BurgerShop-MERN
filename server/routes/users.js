import express from "express";
import passport from "passport";
import { myProfile, logOut } from "../controller/user.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/login",
  passport.authenticate("google"),
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

router.get("/logout", logOut);

export default router;
