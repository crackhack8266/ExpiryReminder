const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();

router.use("/user", require("./user"));
router.use("/", requireAuth, require("./root"));

module.exports = router;
