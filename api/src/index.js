require("./models/User");
require("./models/Item");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const crudItemRoutes = require("./routes/crudItemRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(crudItemRoutes);
mongoose.connect("mongodb://localhost:27017/items");

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("Error", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your Email Is: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
