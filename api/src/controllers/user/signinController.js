const userService = require("../../services/user");

const signinUser = (req, res) => {
  userService
    .loginUserService(req, res)
    .then((token) => {
      res.status(422).json(token).send();
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

module.exports = signinUser;
