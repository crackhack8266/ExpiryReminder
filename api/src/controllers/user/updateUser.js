const userService = require("../../services/user");

const updateUser = (req, res) => {
  userService
    .updateUserService(req, res)
    .then((token) => {
      res.status(422).json(token).send();
    })
    .catch((e) => {
      res.send(e);
    });
};

module.exports = updateUser;
