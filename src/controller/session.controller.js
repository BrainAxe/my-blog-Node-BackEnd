const { get } = require('lodash');
require('dotenv').config();
const { validatePassword } = require('../service/user.service');
const {
  createSession,
  createAccessToken,
  updateSession,
  findSessions
} = require('../service/session.service');
const { sign } = require('../utils/jwt.utils');

async function createUserSessionHandler(req, res) {
  // validate the email and password
  const { email, password } = req.body;
  const user = await validatePassword(email, password);

  if (!user) {
    return res.status(401).send('Invalid username or password');
  }

  // Create a session
  const session = await createSession(user._id, req.get('user-agent') || '');

  // Create access token
  const accessToken = createAccessToken(user, session);

  // Create refresh token
  const refreshToken = sign(session, {
    expiresIn: process.env.REFRESH_TOKEN_TTL
  });

  // send refresh & access token back
  return res.send({ accessToken, refreshToken });
}

async function invalidateUserSessionHandler(req, res) {
  const sessionId = get(req, 'user.session');
  await updateSession({ _id: sessionId }, { valid: false });
  return res.sendStatus(200);
}

async function getUserSessionsHandler(req, res) {
  const userId = get(req, 'user._id');
  const sessions = await findSessions({ user: userId, valid: true });
  return res.send(sessions);
}

module.exports = {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler
};
