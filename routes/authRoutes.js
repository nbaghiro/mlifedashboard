const passport = require("passport");

module.exports = app => {
	app.get(
		"/auth/facebook",
		passport.authenticate("facebook")
	);

	app.get(
		"/auth/facebook/callback",
		passport.authenticate("facebook", { failureRedirect: "/auth/fail" }),
		(req, res) => {
			res.redirect("/api/current-user");
		}
	);

  app.get(
    "/auth/fail",
    (req, res) => {
      res.send("Auth failed");
    }
  )

	app.get("/api/logout", (req, res) => {
		req.logout();
		res.redirect("/");
	});

	app.get("/api/current-user", (req, res) => {
		res.send("Current User");
		res.send(req.user);
	});
};
