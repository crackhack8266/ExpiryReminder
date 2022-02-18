const User = require("../../models/User");

const { BadRequestException } = require("../../utilities/exceptions");

const getUsersService = async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (err) {
    res.status(422).send(err.message);
  }
};
module.exports = getUsersService;
