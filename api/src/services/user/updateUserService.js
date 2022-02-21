const User = require("../../models/User");

const { BadRequestException } = require("../../utilities/exceptions");

const updateUserService = async (id, body) => {
  try {
    const result = await User.findById(id);
    Object.assign(result, body);
    result.save();
    return {
      id,
      result,
    };
  } catch (err) {
    throw new BadRequestException("Please Provide Correct Id");
  }
};
module.exports = updateUserService;
