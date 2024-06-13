import authenticate from "../middleware/auth.middleware";

const routesInit = (app, passport) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login",
      successRedirect: "/user",
    }),
    (err, res) => {
      console.log("User Authenticated");
      res.redirect("/");
    }
  );
  app.get("/test", authenticate, (req, res) => {
    res.send("<h3>User is Authenticated</h3>");
  });
};

export default routesInit;
