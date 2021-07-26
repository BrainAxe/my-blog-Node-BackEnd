const { createUserHandler } = require('./controller/user.controller');
const createUserSessionHandler = require('./controller/session.controller');
const validateRequest = require('./middleware/validateRequest')
const { createUserSchema, createUserSessionSchema } = require('./schema/user.schema');

module.exports = function (app) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200));

  // Register user
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);

  // Login
  app.post('/api/sessions', validateRequest(createUserSessionSchema), createUserSessionHandler)

  // Get the user's sessions
  // GET /api/sessions

  // Logout
  // DELETE /api/sessions
}
