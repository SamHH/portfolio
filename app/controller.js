module.exports = function (app) {
  const requireDir = require('require-dir');
  var models = requireDir('./models');

  app.get('/', models.home);
  app.post('/send-email', models.formSubmit);
};
