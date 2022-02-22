const User = require("../../models/User");

const { NotFoundException } = require("../../utilities/exceptions");

const getUserService = async (id) => {
  try {
    const result = await User.findById(id);
    return { data: { email: result.email, salary: result.salary } };
  } catch (err) {
    throw new NotFoundException(
      "Please provide correct id, as there is no user assigned to that id."
    );
  }
};
module.exports = getUserService;
