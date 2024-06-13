import GoogleStrategy from "passport-google-oauth20";
import config from ".";

const googleAuth = (passport) => {
  GoogleStrategy.Strategy;

  console.log(config);

  passport.use(
    new GoogleStrategy(
      {
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: config.GOOGLE_REDIRECT_URL,
      },
      (accessToken, refreshToken, profile, callback) => {
        console.log(profile);
        return callback(null, profile);
      }
    )
  );
  passport.serializeUser((user, callback) => {
    callback(null, user.id);
  });

  passport.deserializeUser((id, callback) => {
    callback(null, id);
  });
};

export default googleAuth;
