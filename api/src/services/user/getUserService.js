const User = require("../../models/User");

const { BadRequestException } = require("../../utilities/exceptions");

const getUserService = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    res.send(result);
  } catch (err) {
    res.status(422).send(err.message);
  }
};
module.exports = getUserService;
