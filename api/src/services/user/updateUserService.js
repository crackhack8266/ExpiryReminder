const User = require("../../models/User");

const { BadRequestException } = require("../../utilities/exceptions");

const updateUserService = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    Object.assign(result, req.body);
    result.save();
    res.send("updated");
  } catch (err) {
    res.status(422).send(err.message);
  }
};
module.exports = updateUserService;
