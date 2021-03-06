const { createUserHandler } = require('./controller/user.controller');
const {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler
} = require('./controller/session.controller');
const {
  createPostHandler,
  getPostHandler,
  getAllPostHandler,
  updatePostHandler,
  deletePostHandler
} = require('./controller/post.controller');
const validateRequest = require('./middleware/validateRequest');
const requiresUser = require('./middleware/requiresUser');
const {
  createUserSchema,
  createUserSessionSchema
} = require('./schema/user.schema');
const {
  createPostSchema,
  updatePostSchema,
  deletePostSchema
} = require('./schema/post.schema');

module.exports = function (app) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200));

  // Register user
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);

  // Login
  app.post(
    '/api/sessions',
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  // Get the user's sessions
  app.get('/api/sessions', requiresUser, getUserSessionsHandler);

  // Logout
  app.delete('/api/sessions', requiresUser, invalidateUserSessionHandler);

  // Create a Post
  app.post(
    '/api/posts',
    [requiresUser, validateRequest(createPostSchema)],
    createPostHandler
  );

  // Read a Post
  app.get('/api/posts/:postId', getPostHandler);

  // Read all Post
  app.get('/api/posts', getAllPostHandler);

  // Update a Post
  app.put('/api/posts/:postId', [
    requiresUser,
    validateRequest(updatePostSchema),
    updatePostHandler
  ]);

  // Delete a Post
  app.delete('/api/posts/:postId', [
    requiresUser,
    validateRequest(deletePostSchema),
    deletePostHandler
  ]);
};
