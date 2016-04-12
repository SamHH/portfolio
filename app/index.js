require('dotenv').load()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Configuration
app.set('port', process.env.NODE_PORT || 5000)
app.set('views', `${__dirname}/views`)
app.set('view engine', 'jade')
app.use('/public', express.static(`${__dirname}/public`))

// Body parsing
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Controller (and models)
require('./controller')(app)

// Run
app.listen(app.get('port'), function (err) {
  if (err) console.error(err)
  else console.log(`Server started: http://localhost:${app.get('port')}/`)
});
