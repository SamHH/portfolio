module.exports = function (req, res) {
  // Email data
  const nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: `Form submitted on samhh.com: ${req.body.subject} from ${req.body.name} (${req.body.email})`,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) return console.log(err)
    else console.log(`Message sent ${info.response}`)
  })

  // If submitted via AJAX return success, else redirect user back to home
  if (req.body.ajax === 'yes') res.send('success')
  else res.redirect('/')
}
