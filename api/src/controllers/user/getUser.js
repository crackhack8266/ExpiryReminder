const userService = require("../../services/user");

const getUser = (req, res) => {
  userService
    .getUserService(req.params.id)
    .then((user) => {
      res.status(200).json(user).send();
    })
    .catch((e) => {
      res.status(e.statusCode).send(e);
    });
};

module.exports = getUser;
