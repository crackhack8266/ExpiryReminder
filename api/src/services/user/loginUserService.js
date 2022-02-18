const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const { BadRequestException } = require("../../utilities/exceptions");

const loginUserService = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestException("Please Provide Email And Passowrd");
  }
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new BadRequestException(
        "Please Provide Correct Email And Password bb"
      );
    }

    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, config.get("tokenSecret"));
    res.send({ token: token });
  } catch (e) {
    if (e === false)
      throw new BadRequestException(
        "Please Provide Correct Email And Password"
      );
    res.status(e.statusCode).send(e);
  }
};

module.exports = loginUserService;
