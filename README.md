# SamHH | Portfolio
My portfolio site, far from finished! ([samhh.com](http://samhh.com))

---

## Which files aren't in this repository?
Presently, only one file is absent from this repository - send-email.php - the reason being that it contains my Mailgun API key

## Which technologies are in use here?
- HTML5
- CSS3 w/ Sass (SCSS syntax)
- JavaScript w/o jQuery, transpiled using Babel
- Gulp w/ various other dependencies via npm
- Bower for frontend dependencies
- Composer for backend dependencies

## How do I utilise this repository?
1. Ensure you have npm (node), Bower and Composer installed globally. Of course you'll need Git installed too. Your server will need to be able to run PHP (minimum version should be around 5.4 approx)
2. Clone the repo
3. Run ``npm install && composer install && bower install`` to install all dependencies
4. Now run ``gulp`` to start the task. Note that this will automatically start a [BrowserSync](http://www.browsersync.io/) instance
