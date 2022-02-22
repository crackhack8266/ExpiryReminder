const UnauthorizedException = require("./UnauthorizedException");
const BadRequestException = require("./BadRequestException");
const NotFoundException = require("./NotFoundException");
const ConflictException = require("./ConflictException");
const UnprocessableEntity = require("./UnprocessableEntityException");
const ServerException = require("./ServerException");

module.exports = {
  UnauthorizedException,
  BadRequestException,
  NotFoundException,
  ConflictException,
  UnprocessableEntity,
  ServerException,
};
