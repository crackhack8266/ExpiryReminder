const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const {
  ConflictException,
  UnprocessableEntity,
} = require("../../utilities/exceptions");

const createUserService = async (body) => {
  const { username, email, password } = body;
  if (!username || !email || !password)
    throw new UnprocessableEntity("Must Provide Email, Password and Username");
  try {
    const user = new User({ userName: username, email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.get("tokenSecret"));
    return {
      token,
      data: { id: user._id, username: user.userName, email: user.email },
    };
  } catch (e) {
    throw new ConflictException(
      "Account already exists.! Try with another email id"
    );
  }
};
module.exports = createUserService;
