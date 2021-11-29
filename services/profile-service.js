const dao = require("../db/profile/profile-dao");

module.exports = (app) => {
  const findProfileById = (req, res) =>
    dao.findProfileById().then((response) => res.json(response));

  const updateProfile = (req, res) => {
    // const updatedProfile = req.body;
    // const profileId = req.params["id"];
    // profile = profile.map((profile) =>
    //   profile._id === profileId ? updatedProfile : profile
    // );
    dao.updateProfile(req.body).then((status) => res.json(status));
  };

  app.get("/rest/profile", findProfileById);
  app.put("/rest/profile", updateProfile);
};
