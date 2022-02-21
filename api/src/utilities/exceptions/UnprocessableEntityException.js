const generateException = require("./generateException");

class UnprocessableEntity extends Error {
  constructor(exception) {
    super();
    generateException(this, 422, "Unprocessable Entity", exception);
  }
}

module.exports = UnprocessableEntity;
