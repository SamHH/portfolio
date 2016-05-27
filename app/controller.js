module.exports = function (app) {
  const requireDir = require('require-dir')
  const controllers = requireDir('./controllers')

  app.get('/', controllers.home)
  app.post('/send-email', controllers.formSubmit)

  app.use((req, res, next) => {
    res.status(404).render('pages/full-page-message', {
      devenv: process.env.DEV_ENV,
      title: '404',
      messageHTML: 'You\'re lost! To find your way back, click <a href="/">here</a>.'
    })
  })
}
