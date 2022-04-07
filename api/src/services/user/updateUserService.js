const User = require("../../models/User");

const { NotFoundException } = require("../../utilities/exceptions");

const updateUserService = async (id, body) => {
  let result;
  try {
    result = await User.findById(id);
    if (!result)
      throw new NotFoundException("User not found. Provide correct id");
  } catch (e) {
    e.description = "User not found. Provide correct id";
    throw new NotFoundException(e.description);
  }

  if (body.createdAt) {
    delete body.createdAt;
  }
  Object.assign(result, body);
  try {
    const result1 = await User.exists({ email: body.email, _id: { $ne: id } });
    if (result1) throw new NotFoundException("abcd");
  } catch (e) {
    throw new NotFoundException("email is same");
  }

  try {
    result.save();
    return {
      data: {
        username: result.userName,
        email: result.email,
        firstname: result.firstName,
        lastname: result.lastName,
        phone: result.phone,
        isverified: result.isVerified,
      },
    };
  } catch (err) {
    throw new NotFoundException(
      "Please provide correct id, as there is no user assigned to that id."
    );
  }
};
module.exports = updateUserService;
