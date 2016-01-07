module.exports = function (req, res) {
  res.render('pages/react', {
    devenv: process.env.DEV_ENV,
    title: 'Learning React'
  });
};
