module.exports = function (app) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200));
}
