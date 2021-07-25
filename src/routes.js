const { createUserHandler } = require('./controller/user.controller');
const validateRequest = require('./middleware/validateRequest')
const createUserSchema = require('./schema/user.schema');

module.exports = function (app) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200));

  // Register user
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);

  // Login
  // POST /api/sessions

  // Get the user's sessions
  // GET /api/sessions

  // Logout
  // DELETE /api/sessions
}
