const User = require("../../models/User");

const { NotFoundException } = require("../../utilities/exceptions");

const updateUserService = async (id, body) => {
  try {
    const result = await User.findById(id);
    Object.assign(result, body);
    result.save();
    return {
      id,
      data: body,
    };
  } catch (err) {
    throw new NotFoundException(
      "Please provide correct id, as there is no user assigned to that id."
    );
  }
};
module.exports = updateUserService;
