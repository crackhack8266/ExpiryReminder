const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const { BadRequestException } = require("../../utilities/exceptions");

const createUserService = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.get("tokenSecret"));
    res.send({ token });
  } catch (e) {
    res.status(422).send(e.message);
  }
};
module.exports = createUserService;
