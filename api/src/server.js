require("./models/User");
require("./models/Item");
const mongoConnection = require("../config/connection");
const express = require("express");
const bodyParser = require("body-parser");
const controllers = require("./controllers/index");
const config = require("config");

mongoConnection();
const app = express();
app.use(bodyParser.json());
app.use(controllers);

app.listen(config.get("port"), () => {
  console.log(`listening to port ${config.get("port")}`);
});
