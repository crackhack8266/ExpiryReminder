const userService = require("../../services/user");

const getUsers = (req, res) => {
  const { page = 1, limit = 2 } = req.query;

  userService
    .getUsersService(page, limit)
    .then((result) => {
      res.status(200).json(result).send();
    })
    .catch((e) => {
      res.status(e.statusCode).send(e.data);
    });
};

module.exports = getUsers;
