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
router.delete("/del/:id", deleteUser);
router.patch("/update/:id", updateUser);
router.get("/getusers", getUsers);
router.get("/getuser/:id", getUser);

module.exports = router;
