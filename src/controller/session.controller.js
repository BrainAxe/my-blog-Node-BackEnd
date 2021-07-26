const { validatePassword } = require('../service/user.service');
const { createSession, createAccessToken } = require('../service/session.service');
const { sign } = require('../utils/jwt.utils');
const config = require('config');


async function createUserSessionHandler(req, res) {
  // validate the email and password
  const email = req.body.email;
  const password = req.body.password;
  const user = await validatePassword(email, password);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  // Create a session
  const session = await createSession(user._id, req.get('user-agent') || "");

  // Create access token
  const accessToken = createAccessToken(user, session);

  // Create refresh token
  const refreshToken = sign(session, { expiresIn: config.get('refreshTokenTtl') })

  // send refresh & access token back
  return res.send({ accessToken, refreshToken });

}

module.exports = createUserSessionHandler;
