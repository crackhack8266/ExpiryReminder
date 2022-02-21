const userService = require("../../services/user");

const signinUser = (req, res) => {
  userService
    .loginUserService(req.body)
    .then((result) => {
      res.status(200).json(result).send();
    })

    .catch((e) => {
      res.status(e.statusCode).send(e.data);
    });
};

module.exports = signinUser;
