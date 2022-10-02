import express from "express";
import passport from "passport";

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

export default router;
