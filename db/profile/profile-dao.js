const model = require("./profile-model");

const findProfileById = () => model.find();

const updateProfile = (profile) => model.updateOne({ $set: profile });

module.exports = {
  findProfileById,
  updateProfile,
};
