const User = require("../../models/User");

const { BadRequestException } = require("../../utilities/exceptions");

const deleteUserService = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    await result.remove();
    res.send("deleted");
  } catch (err) {
    res.status(422).send(err.message);
  }
};
module.exports = deleteUserService;
