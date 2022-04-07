const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT,
  dbConfig: {
    connectionString: process.env.CONNECTION_STRING,
    dbName: process.env.DATABASE_NAME,
  },
  tokenSecret: process.env.TOKEN_SECRET,
  mailGunApi: process.env.MAILGUN_API_KEY,
  mailGunDomain: process.env.MAILGUN_DOMAIN,
};
