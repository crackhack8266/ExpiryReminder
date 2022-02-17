const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const config = require("config");
const { UnauthorizedException } = require("../utilities/exceptions");

const authenticateLogin = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new UnauthorizedException(
      "Unauthorized user: Please Provide Token For Verification"
    );
  }
  const token = authorization;
  try {
    jwt.verify(token, config.get("tokenSecret"), async (err, payload) => {
      if (err) {
        throw new UnauthorizedException(
          "Unauthorized User: Token Verification Failed"
        );
      }
      const { userId } = payload;
      const user = await User.findById(userId);
      req.user = user;
      next();
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = authenticateLogin;
