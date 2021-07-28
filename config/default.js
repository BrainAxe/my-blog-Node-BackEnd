require('dotenv').config();

const config = {
  port: process.env.PORT,
  host: process.env.HOST,
  dbUrl: process.env.DB_URL,
  saltWorkFactor: process.env.SALT_WORK_FACTOR,
  accessTokenTtl: process.env.ACCESS_TOKEN_TTL,
  refreshTokenTtl: process.env.REFRESH_TOKEN_TTL,
  privateKey: process.env.PRIVATE_KEY
};

module.exports = config;
