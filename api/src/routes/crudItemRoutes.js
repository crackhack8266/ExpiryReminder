const express = require("express");
const mongoose = require("mongoose");
const Item = mongoose.model("Item");

const router = express.Router();

router.post("/addItem", async (req, res) => {
  const { itemName, expiryDate, userId } = req.body;
  try {
    const item = new Item({ itemName, expiryDate, userId });
    await item.save();
    res.send("saved");
  } catch (e) {
    res.status(422).send(e.message);
  }
});

router.delete("/del/:id", async (req, res) => {
  try {
    const result = await Item.findById(req.params.id);
    await result.remove();
    res.send("deleted");
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const result = await Item.findById(req.params.id);
    Object.assign(result, req.body);
    result.save();
    res.send("updated");
  } catch (err) {
    res.status(422).send(err.message);
  }
});

module.exports = router;
