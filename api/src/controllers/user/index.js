const express = require("express");
const createUser = require("./createUser");
const signinUser = require("./signinController");
const deleteUser = require("./deleteUser");
const getUser = require("./getUser");
const getUsers = require("./getUsers");
const updateUser = require("./updateUser");

const router = express.Router();

router.post("/signin", signinUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.get("/users", getUsers);
router.get("/:id", getUser);

module.exports = router;
