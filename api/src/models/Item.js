const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    require: true,
  },
  expiryDate: {
    type: Date,
    require: true,
  },
  userId: {
    type: String,
  },
});

mongoose.model("Item", itemSchema);
