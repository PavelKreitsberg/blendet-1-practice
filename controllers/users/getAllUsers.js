const User = require("../../models/User");

const getAllUsers = async (req, res) => {
  return await User.find({ _id: { $ne: req.user._id } });
};

module.exports = getAllUsers;
