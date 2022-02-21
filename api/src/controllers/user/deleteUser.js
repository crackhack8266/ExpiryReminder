const userService = require("../../services/user");

const deleteUser = (req, res) => {
  userService
    .deleteUserService(req.params.id)
    .then((deletedUserId) => {
      res.status(200).json(deletedUserId).send();
    })
    .catch((e) => {
      res.status(e.statusCode).send(e);
    });
};

module.exports = deleteUser;
