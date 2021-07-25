const mongoose = require('mongoose');
const config = require('config');
const log = require('../logger');


function connect() {
  const dbUrl= config.get("dbUrl");

  return mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    log.info("Database connected!");
  })
  .catch((error) => {
    log.error("db error", error);
    process.exit(1);
  });
}

module.exports = connect;
