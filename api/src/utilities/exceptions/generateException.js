function generateException(errorInstance, statusCode, title, exception) {
  errorInstance.statusCode = exception.statusCode || statusCode;
  errorInstance.title = exception.title || title;
}
module.exports = generateException;
