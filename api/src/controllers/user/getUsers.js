const userService = require("../../services/user");

const getUsers = (req, res) => {
  userService
    .getUsersService(req.query)
    .then((result) => {
      res.status(200).json(result).send();
    })
    .catch((e) => {
      res.status(e.statusCode).send(e);
    });
};

module.exports = getUsers;
