const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const {
  NotAcceptableException,
  NotFoundException,
  UnprocessableEntity,
} = require("../../utilities/exceptions");

const loginUserService = async (body) => {
  const { email, password } = body;

  if (!email || !password) {
    throw new UnprocessableEntity("Please provide email and password.");
  }
  try {
    const user = await User.findOne({ email: email });
    // if (!user) {
    //   throw new NotFoundException("Please provide correct email.");
    // }

    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, config.get("tokenSecret"));
    return { token, id: user._id, email: user.email, salary: user.salary };
  } catch (e) {
    if (e === false) throw new NotAcceptableException("Password is incorrect");
    throw new NotFoundException("Please provide correct email");
  }
};

module.exports = loginUserService;
