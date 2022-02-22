const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const {
  UnauthorizedException,
  UnprocessableEntity,
  ServerException,
} = require("../../utilities/exceptions");

const loginUserService = async (body) => {
  const { email, password } = body;

  if (!email || !password) {
    throw new UnprocessableEntity("Please provide email and password.");
  }
  let user;
  try {
    user = await User.findOne({ email: email });
  } catch (e) {
    throw new ServerException("Internal Server Errror");
  }
  if (!user) {
    throw new UnauthorizedException(
      "Please provide correct email and password"
    );
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, config.get("tokenSecret"));
    return {
      token,
      data: { id: user._id, email: user.email, salary: user.salary },
    };
  } catch (e) {
    throw new UnauthorizedException(
      "Please provide correct email and password"
    );
  }
};

module.exports = loginUserService;
