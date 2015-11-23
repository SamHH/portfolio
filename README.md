# SamHH | Portfolio
My portfolio site, far from finished! ([samhh.com](http://samhh.com))

---

## Which files aren't in this repository?
Presently, the only code absent from this repository is a file called send-email.php (called by the AJAX form) - the reason being that it contains my Mailgun API key. The only other non-reproducible file ignored by Git (see: .gitignore) is the landing block image in an ./assets/images/ directory

## Which technologies are in use here?
- HTML5
- CSS3 w/ Sass (SCSS syntax)
- JavaScript w/o jQuery, transpiled using Babel
- npm for frontend dependencies and Gulp (task-runner)
- Composer for backend dependencies

## How do I utilise this repository?
1. Ensure you have npm (node) and Composer installed globally. Of course you'll need Git installed too. Your server will need to be able to run PHP (minimum version should be around 5.4 approx)
2. Clone the repo
3. Run ``npm install && composer install`` to install all dependencies
4. Now run ``gulp`` to start the task. Note that this will automatically start a [BrowserSync](http://www.browsersync.io/) instance
