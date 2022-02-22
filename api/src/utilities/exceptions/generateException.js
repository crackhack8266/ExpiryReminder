function generateException(errorInstance, statusCode, title, exception) {
  errorInstance.statusCode = exception.statusCode || statusCode;
  errorInstance.data = {
    exception: {
      title: exception.title || title,
      description:
        typeof exception === "string" ? exception : exception.description,
    },
  };
}
module.exports = generateException;
