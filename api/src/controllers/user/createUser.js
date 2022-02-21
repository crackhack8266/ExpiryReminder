const userService = require("../../services/user");
const { BadRequestException } = require("../../utilities/exceptions");

const createUser = (req, res) => {
  userService
    .createUserService(req.body)
    .then((token) => {
      res.status(200).json(token).send();
    })
    .catch((e) => {
      res.status(e.statusCode).send(e);
    });
};

module.exports = createUser;
