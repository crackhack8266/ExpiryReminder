const generateException = require("./generateException");

class ServerException extends Error {
  constructor(exception) {
    super();
    generateException(this, 500, "Internal Server Error", exception);
  }
}

module.exports = ServerException;
