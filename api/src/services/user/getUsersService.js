const User = require("../../models/User");

const { BadRequestException } = require("../../utilities/exceptions");

const getUsersService = async (query) => {
  try {
    const { page = 1, limit = 2 } = query;

    const result = await User.find()
      .limit(limit)
      .skip((page - 1) * limit);

    const numOfItems = await User.countDocuments();
    const totalPages = Math.ceil(numOfItems / limit);
    return {
      TotalPages: totalPages,
      TotalEntries: numOfItems,
      CurrentPage: parseInt(page),
      ItemPerPage: limit,
      result,
    };
  } catch (err) {
    return err.message;
  }
};
module.exports = getUsersService;
