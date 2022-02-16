const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Your Email Is: ${req.user.email}`);
});

module.exports = router;
