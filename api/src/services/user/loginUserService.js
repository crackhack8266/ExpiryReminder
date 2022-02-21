const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const { BadRequestException } = require("../../utilities/exceptions");

const loginUserService = async (body) => {
  const { email, password } = body;

  if (!email || !password) {
    throw new BadRequestException("Please Provide Email And Passowrd");
  }
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new BadRequestException(
        "Please Provide Correct Email And Password b"
      );
    }

    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, config.get("tokenSecret"));
    return { token, user };
  } catch (e) {
    if (e === false)
      throw new BadRequestException(
        "Please Provide Correct Email And Password"
      );
    return e;
  }
};

module.exports = loginUserService;
