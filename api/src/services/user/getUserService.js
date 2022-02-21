const User = require("../../models/User");

const { BadRequestException } = require("../../utilities/exceptions");

const getUserService = async (id) => {
  try {
    const result = await User.findById(id);
    return { result };
  } catch (err) {
    throw new BadRequestException("Please Provide Correct Id");
  }
};
module.exports = getUserService;
