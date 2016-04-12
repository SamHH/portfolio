module.exports = function (req, res) {
  const jsonfile = require('jsonfile')
  const jsonPath = './app/data/home.json'

  jsonfile.readFile(jsonPath, function (err, obj) {
    if (err) {
      console.log(err)
      res.redirect('/error')
      // Else as otherwise script continues before json file has been read
    } else renderPage(obj.home)
  })

  function renderPage (data) {
    res.render('pages/home', {
      devenv: process.env.DEV_ENV,
      title: 'Home',
      expertise: data.expertise,
      projects: data.projects,
      alternateColors: data.alternateColors
    })
  }
}
