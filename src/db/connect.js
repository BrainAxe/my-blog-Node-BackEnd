const mongoose = require('mongoose');
require('dotenv').config();
const log = require('../logger');

function connect() {
  const dbUrl = process.env.DB_URL;

  return mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => {
      log.info('Database connected!');
    })
    .catch((error) => {
      log.error('db error', error);
      process.exit(1);
    });
}

module.exports = connect;
