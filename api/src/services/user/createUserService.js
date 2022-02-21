const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const { BadRequestException } = require("../../utilities/exceptions");

const createUserService = async (body) => {
  try {
    const { email, password, salary } = body;

    const user = new User({ email, password, salary });
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.get("tokenSecret"));
    return { token, user };
  } catch (e) {
    throw new BadRequestException("Please Provide Email, Password & Salary");
  }
};
module.exports = createUserService;
