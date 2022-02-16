const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT,
  dbConfig: {
    connectionString: process.env.CONNECTION_STRING,
    dbName: process.env.DATABASE_NAME,
  },
  tokenSecret: process.env.TOKEN_SECRET,
};
