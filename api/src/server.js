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
// const mailgun = require("mailgun-js");
// const mg = mailgun({
//   apiKey: config.get("mailGunApi"),
//   domain: config.get("mailGunDomain"),
// });
// const data = {
//   from: "Overwatch <me@samples.mailgun.org>",
//   to: "shail.patel@adrixus.com",
//   subject: "Hello",
//   text: "Testing some Mailgun awesomness!",
// };
// mg.messages().send(data, function (error, body) {
//   console.log(body);
// });
