const User = require("../../models/User");

const { BadRequestException } = require("../../utilities/exceptions");

const deleteUserService = async (id) => {
  try {
    const result = await User.findById(id);
    await result.remove();
    return { id, result };
  } catch (err) {
    throw new BadRequestException("Please Provide Correct Id");
  }
};
module.exports = deleteUserService;
