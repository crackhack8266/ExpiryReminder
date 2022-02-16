const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const config = require("config");

const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.get("tokenSecret"));
    res.send({ token });
  } catch (e) {
    return res.status(422).send(e.message);
  }
};

module.exports = createUser;
