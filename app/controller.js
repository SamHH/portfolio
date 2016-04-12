module.exports = function (app) {
  const requireDir = require('require-dir');
  const controllers = requireDir('./controllers')

  app.get('/error', controllers.error)

  app.get('/', controllers.home)
  app.post('/send-email', controllers.formSubmit)
};
