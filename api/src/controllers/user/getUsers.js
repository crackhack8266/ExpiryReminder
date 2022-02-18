const userService = require("../../services/user");

const getUsers = (req, res) => {
  userService
    .getUsersService(req, res)
    .then((token) => {
      res.status(422).json(token).send();
    })
    .catch((e) => {
      res.send(e);
    });
};

module.exports = getUsers;
