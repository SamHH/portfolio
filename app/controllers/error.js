module.exports = function (req, res) {
  res.render('pages/generic-message', {
    devenv: process.env.DEV_ENV,
    title: 'Error',
    message: 'A server error has occurred. Please try again later.'
  });
};
