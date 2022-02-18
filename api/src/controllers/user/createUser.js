const userService = require("../../services/user");

const createUser = (req, res) => {
  userService
    .createUserService(req, res)
    .then((token) => {
      res.status(422).json(token).send();
    })
    .catch((e) => {
      res.send(e);
    });
};

module.exports = createUser;
