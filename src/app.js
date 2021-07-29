const path = require('path');
const fs = require('fs');
const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const log = require('./logger');
const connect = require('./db/connect');
const routes = require('./routes');
const deserializeUser = require('./middleware/deserializeUser');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();
app.use(deserializeUser);

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
);

app.use(helmet());
app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.listen(port, host, () => {
//   log.info(`Server is listening on http://${host}:${port}`);
//   connect();
//   routes(app);
// });
app.listen(port, () => {
  log.info(`Server is listening on port ${port}`);
  connect();
  routes(app);
});
