const express = require('express');
const config = require('config');
const log = require('./logger');
const connect = require('./db/connect');

const port = config.get('port');
const host = config.get('host');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server is listening on http://${host}:${port}`);
  connect();
});
