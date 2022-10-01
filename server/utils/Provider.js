import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

export const connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: "rio",
        clientSecret: "rio",
        callbackURL: "rio",
      },
      async function (accessToken, refreshToken, profile, next) {
        // Database Has Need to be here
      }
    )
  );
};

passport.serializeUser((user, next) => {
  next(null, user.id);
});

passport.deserializeUser(async (id, next) => {
  //   const user = await User.findById(id);
  next(null, user);
});
