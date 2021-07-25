const { createUser } = require('../service/user.service');
const { omit } = require('lodash');
const log = require('../logger');

async function createUserHandler(req, res) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), 'password'));
  } catch (e) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};

module.exports = { createUserHandler };
