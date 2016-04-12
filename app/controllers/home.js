module.exports = function (req, res) {
  res.render('pages/home', {
    devenv: process.env.DEV_ENV,
    title: 'Home'
  })
}
