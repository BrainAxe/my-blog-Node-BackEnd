const config = require('config');
const Session = require('../model/session.model');
const { sign } = require('../utils/jwt.utils');

async function createSession(userId, userAgent) {
  const session = await Session.create({ user: userId, userAgent });
  return session.toJSON();
}

function createAccessToken(user, session) {
  // Build and return the new access token
  const accessToken = sign(
    { ...user, session: session._id },
    {
      expiresIn: config.get('accessTokenTtl')
    }
  );

  return accessToken;
}

module.exports = { createSession, createAccessToken};
