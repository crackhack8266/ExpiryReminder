const User = require("../../models/User");

const { BadRequestException } = require("../../utilities/exceptions");

const getUsersService = async (req, res) => {
  try {
    const { page = 1, limit = 2 } = req.query;

    const result = await User.find()
      .limit(limit)
      .skip((page - 1) * limit);

    const numOfItems = await User.countDocuments();
    const totalPages = Math.ceil(numOfItems / limit);
    res.status(200).json({
      TotalPages: totalPages,
      TotalEntries: numOfItems,
      CurrentPage: parseInt(page),
      ItemPerPage: limit,
      result,
    });
  } catch (err) {
    res.status(422).send(err.message);
  }
};
module.exports = getUsersService;
