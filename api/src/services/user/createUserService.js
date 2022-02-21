const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const {
  ConflictException,
  UnprocessableEntity,
} = require("../../utilities/exceptions");

const createUserService = async (body) => {
  const { email, password, salary } = body;
  if (!email || !password || !salary)
    throw new UnprocessableEntity("Must Provide Email, Password and Salary");
  try {
    const user = new User({ email, password, salary });
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.get("tokenSecret"));
    return { token, user };
  } catch (e) {
    throw new ConflictException(
      "Account already exists.! Try with another email id"
    );
  }
};
module.exports = createUserService;
