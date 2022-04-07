const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const CONSTANTS = require("../constants/");
const {
  UnauthorizedException,
  BadRequestException,
} = require("../utilities/exceptions");

const authenticateLogin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new BadRequestException(CONSTANTS.PROVIDE_TOKEN);
    const token = authorization;
    await jwt.verify(token, config.get("tokenSecret"), async (err, payload) => {
      if (err) throw new UnauthorizedException(CONSTANTS.PROVIDE_CORRECT_TOKEN);
      const { userId } = payload;
      const user = await User.findById(userId);
      req.user = user;
      next();
    });
  } catch (e) {
    res.status(e.statusCode).send(e);
  }
};

module.exports = authenticateLogin;
