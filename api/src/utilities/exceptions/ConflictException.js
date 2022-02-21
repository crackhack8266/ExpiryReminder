const generateException = require("./generateException");

class ConflictException extends Error {
  constructor(exception) {
    super();
    generateException(this, 409, "Conflict Error", exception);
  }
}

module.exports = ConflictException;
