module.exports = function (app) {
  const requireDir = require('require-dir');
  var controllers = requireDir('./controllers');

  app.get('/error', controllers.error);

  app.get('/', controllers.home);
  app.post('/send-email', controllers.formSubmit);

  // Temp - learning React
  app.get('/react', controllers.react);
};
