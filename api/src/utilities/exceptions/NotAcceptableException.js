const generateException = require("./generateException");

class NotAcceptableException extends Error {
  constructor(exception) {
    super();
    generateException(this, 401, "Unauthorized", exception);
  }
}

module.exports = NotAcceptableException;
