const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const config = require("config");

const authenticateLogin = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in" });
  }
  const token = authorization;
  try {
    jwt.verify(token, config.get("tokenSecret"), async (err, payload) => {
      if (err) {
        return res.status(401).send({ error: "You must be logged in" });
      }
      const { userId } = payload;
      const user = await User.findById(userId);
      req.user = user;
      next();
    });
  } catch (e) {
    return res.status(401).send({ error: "You must be logged in" });
  }
};

module.exports = authenticateLogin;
