const express = require("express");
const createUser = require("./createUserController");
const signinUser = require("./signinController");
const router = express.Router();

router.post("/signin", signinUser);
router.post("/signup", createUser);

module.exports = router;
