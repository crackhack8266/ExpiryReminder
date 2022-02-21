const express = require("express");
const createUser = require("./createUser");
const signinUser = require("./signinController");
const deleteUser = require("./deleteUser");
const getUser = require("./getUser");
const getUsers = require("./getUsers");
const updateUser = require("./updateUser");

const router = express.Router();

router.post("/signin", signinUser);
router.post("/createuser", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
router.get("/getall", getUsers);
router.get("/:id", getUser);

module.exports = router;
