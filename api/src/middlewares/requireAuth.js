const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const config = require("config");
const { UnauthorizedException } = require("../utilities/exceptions");

const authenticateLogin = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new UnauthorizedException(
      "Unauthorized user: Please Provide Token For Verification"
    );
  }
  const token = authorization;
  try {
    await jwt.verify(token, config.get("tokenSecret"), async (err, payload) => {
      if (err) {
        throw new UnauthorizedException("Please provide correct token");
      }
      const { userId } = payload;
      console.log(userId);
      const user = await User.findById(userId);
      req.user = user;
      next();
    });
  } catch (e) {
    res.status(e.statusCode).send(e);
    //cons result = await json(object);
    // json(object).then((res) => { result = res}).catch((e)=>console.log(e))
  }
};

module.exports = authenticateLogin;
