# SamHH | Portfolio
My portfolio site, far from finished! ([samhh.com](http://samhh.com))

---

## Which files aren't in this repository?
No code is exempted from this repository excluding dependencies. Images and other assets are not present but also easily replaced or generated

## Which technologies are in use here?
- HTML5
- CSS3 w/ Sass (SCSS syntax)
- JavaScript w/o jQuery, transpiled using Babel
- npm for frontend dependencies and Gulp (task-runner)
- Composer for backend dependencies

## How do I utilise this repository?
1. Ensure you have npm (node) and Composer installed globally. Of course you'll need Git installed too. Your server will need to be able to run PHP (minimum version should be around 5.4 approx)
2. Clone the repo
3. Rename ``.env.example`` to ``.env`` and edit the variables as required
4. Run ``npm install && composer install`` to install all dependencies
5. Now run ``gulp`` to start the task. Note that this will automatically start a [BrowserSync](http://www.browsersync.io/) instance
