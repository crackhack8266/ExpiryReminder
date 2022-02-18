const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");

router.use("/user", require("./user"));
router.use("/", requireAuth, require("./root"));

module.exports = router;
