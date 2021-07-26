const jwt = require('jsonwebtoken');
const config = require('config');

const privateKey = config.get('privateKey');

function sign(object, options) {
  return jwt.sign(object, privateKey, options);
}

module.exports = { sign };
