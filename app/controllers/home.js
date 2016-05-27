module.exports = function (req, res) {
  res.render('pages/home', {
    devenv: process.env.DEV_ENV,
    title: 'Sam A. Horvath-Hunt\'s Portfolio'
  })
}
