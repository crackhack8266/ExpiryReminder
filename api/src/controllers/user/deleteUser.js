const userService = require("../../services/user");

const deleteUser = (req, res) => {
  userService
    .deleteUserService(req, res)
    .then((deleteStatus) => {
      res.status(422).json(deleteStatus).send();
    })
    .catch((e) => {
      res.send(e);
    });
};

module.exports = deleteUser;
