const userService = require("../../services/user");

const updateUser = (req, res) => {
  userService
    .updateUserService(req.params.id, req.body)
    .then((updatedUserId) => {
      res.status(200).json(updatedUserId).send();
    })
    .catch((e) => {
      //let result = { title: e.title, description: e.description };
      res.status(e.statusCode).send(e.data);
    });
};

module.exports = updateUser;
