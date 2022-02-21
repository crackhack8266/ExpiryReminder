const User = require("../../models/User");

const { BadRequestException } = require("../../utilities/exceptions");

const getUsersService = async (page, limit) => {
  try {
    page = page <= 0 ? 1 : page;
    const result = await User.find()
      .limit(limit)
      .skip((page - 1) * limit);
    const numOfItems = await User.countDocuments();
    const totalPages = Math.ceil(numOfItems / limit);
    return {
      totalPages: totalPages,
      totalEntries: numOfItems,
      currentPage: parseInt(page),
      itemPerPage: limit,
      result,
    };
  } catch (err) {
    return err.message;
  }
};
module.exports = getUsersService;
