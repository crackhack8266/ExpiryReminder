const generateException = require("./generateException");

class NotFoundException extends Error {
  constructor(exception) {
    super();
    generateException(this, 404, "Resource Not Found", exception);
  }
}

module.exports = NotFoundException;
