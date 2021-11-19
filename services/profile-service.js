let profile = require("../data/profile.json");

module.exports = (app) => {
  const getCurrentProfile = (req, res) => {
    res.json(profile);
  };

  const updateCurrentProfile = (req, res) => {
    const newProfile = req.body;
    profile = newProfile;
    res.sendStatus(200);
  };

  app.get("/api/profile", getCurrentProfile);
  app.put("/api/profile", updateCurrentProfile);
};
