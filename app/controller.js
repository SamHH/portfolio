module.exports = function (app) {
  const requireDir = require('require-dir');
  var controllers = requireDir('./controllers');

  app.get('/', controllers.home);
  app.post('/send-email', controllers.formSubmit);
};
