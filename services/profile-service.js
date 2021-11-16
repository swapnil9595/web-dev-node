let profile = require("../data/profile.json");

module.exports = (app) => {
  const getCurrentProfile = (req, res) => {
    res.json(profile);
  };

  const updateCurrentProfile = (req, res) => {
    profile = {
      _id: new Date().getTime() + "",
      profilePicture: "../../images/dp.jpg",
      bannerPicture: "../../images/matrix.jpg",
      ...req.profile,
      dateJoined: "September 20",
      followingCount: 312,
      followersCount: 180,
    };
    res.sendStatus(200);
    //res.json(updatedProfile);
  };

  app.get("/api/profile", getCurrentProfile);
  app.put("/api/profile", updateCurrentProfile);
};
