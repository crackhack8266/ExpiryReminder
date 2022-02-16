const mongoose = require("mongoose");
const config = require("config");

const mongoURI =
  config.get("dbConfig.connectionString") + config.get("dbConfig.dbName");

module.exports = () => {
  mongoose.connect(mongoURI);

  mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Failed to connect mongo instance: ", err);
  });
};
