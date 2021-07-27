const express = require('express');
const config = require('config');
const log = require('./logger');
const connect = require('./db/connect');
const routes = require('./routes');
const deserializeUser = require('./middleware/deserializeUser');

const port = config.get('port');
const host = config.get('host');

const app = express();
app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server is listening on http://${host}:${port}`);
  connect();
  routes(app);
});
