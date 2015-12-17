function home (req, res) {
  res.render('pages/home', {
    devenv: process.env.DEV_ENV,
    title: 'Home',
    expertise: [
      [{
        heading: 'What I do',
        content: 'I make websites'
      }],
      [{
        heading: 'What I do in a little more detail',
        content: "I develop (and sometimes design) high quality websites. The markup is semantic and without bloat, the styling is responsive and modular, and the scripting is modern and performant. And that's just the start."
      }],
      [{
        heading: "That's great and all, but could you show me a sample?",
        content: 'Sure thing! This very website is one such example. You can view the full source code on GitHub here: <a href="https://github.com/SamHH/portfolio" target="_blank">github.com/SamHH/portfolio</a>'
      }]
    ],
    projects: [
      [{
        heading: 'Portfolio',
        links: [],
        content: `Design, frontend & backend, ~ Autumn 2015 - Present<br><br>

        (You're already here!)<br><br>

        What started as a PHP app has become full-stack JavaScript, coinciding without coincedence with my new job at Impero which began in Winter 2015.<br><br>

        This acts largely as my space to learn new technologies that interest me. I've learned technologies such as Node and Jade on this very website.`
      }],
      [{
        heading: 'Perspective Publishing CMS',
        links: [],
        content: `Design, frontend & backend, ~ Autumn 2015<br><br>

        By far the biggest project I've ever taken on, this new CMS was made to replace a legacy system that had been around for almost a decade. The most fundamental change was to bring the CMS' of several dozen event websites under one umbrella. This also coincided with the new events design below.<br><br>

        The biggest challenge for me here was PHP and MySQL -- technologies I was only vaguely familiar with prior to starting. The end result was very strong and a grand improvement over its predecessor.<br><br>

        Unfortunately the site is understandably private and I am not legally authorised to show you a picture or any code from it, so you'll have to take my word for it when I say it's bloody marvellous.`
      }],
      [{
        heading: 'Perspective Publishing events',
        links: [
          '//bettersociety.net/awards/',
          '//www.cirmagazine.com/businesscontinuityawards/',
          '//www.engagementandloyalty.com/'
        ],
        content: `Design, frontend & backend, ~ Summer 2015<br><br>

        This redesign was all about bringing the events sites into the 21st century. Whilst there are aspects I'm not fond of (background images, carousel, inconsistent typography), sacrifices were made along the way for the sake of events staff/editors having control over the websites they would publish. This ties in to the new CMS above.`
      }],
      [{
        heading: 'Perspective Publishing landing',
        links: [
          '//www.perspectivepublishing.com/pp/'
        ],
        content: `Design, frontend & backend, ~ Spring 2015<br><br>

        Fun, this one. Our previous landing page was literally just a picture of a wall with some text sprawled atop it in a very, ahem, <em>unique</em> manner. There was no useful information beyond how to contact the company and visiting it gave you no ideas about what the company actually does.<br><br>

        The new design is all about making that clear. This was also my first ever fully responsive site.`
      }],
      [{
        heading: 'Perspective Publishing magazines',
        links: [
          '//www.pensionsage.com/pa/',
          '//www.europeanpensions.net/ep/',
          '//www.fstech.co.uk/fst/'
        ],
        content: `Frontend, ~ Summer 2014<br><br>

        The magazine redesign here was handled by someone from the production department and the backend was handled by my boss, so this project had me working solely on the frontend.<br><br>

        Looking at a lot of the code now makes my head hurt (I was only a few months into an apprenticeship after all), but that's how I know I've learned since then. There are so many things I'd do differently and objectively better and yet I'm still proud of what I was able to accomplish at the time.`
      }]
    ],
    alternateColors: [
      'Original.',
      'Professional.',
      'Passionate.'
    ]
  });
}

function formSubmit (req, res) {
  // Email data
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: 'Form submitted on samhh.com: ' + req.body.subject + ' from ' + req.body.name + ' (' + req.body.email + ')',
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      return console.log(err);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });

  // If submitted via AJAX return success, else redirect user back to home
  if (req.body.ajax === 'yes') {
    res.send('success');
  } else {
    res.redirect('/');
  }
}

module.exports = function (app) {
  app.get('/', home);
  app.post('/send-email', formSubmit);
};
