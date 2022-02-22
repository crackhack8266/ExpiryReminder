const User = require("../../models/User");

const getUsersService = async (page, limit) => {
  try {
    page = page <= 0 ? 1 : page;
    const result = await User.find({}, { email: 1, salary: 1, _id: 1 })
      .limit(limit)
      .skip((page - 1) * limit);
    const data = result.map((element) => {
      return {
        id: element._id,
        email: element.email,
        salary: element.salary,
      };
    });
    const numOfItems = await User.countDocuments();
    const totalPages = Math.ceil(numOfItems / limit);
    return {
      totalPages: totalPages,
      totalEntries: numOfItems,
      currentPage: parseInt(page),
      itemPerPage: limit,
      data: data,
    };
  } catch (err) {
    return err.message;
  }
};
module.exports = getUsersService;
