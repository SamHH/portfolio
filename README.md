# SamHH | Portfolio

My portfolio, live at: ([samhh.com](https://samhh.com))

---

## Which files aren't in this repository?

No code is exempted from this repository excluding dependencies. Images and other assets are not present but also easily replaced or generated

## Which technologies are in use here?

This project runs Node on the backend with various npm dependencies such as Express

### Meanwhile, on the frontend...

- Jade templating
- Sass (SCSS syntax) preprocessor
- Gulp w/ various plugins incl/ PostCSS
- ES2015 JavaScript (transpiled using Babel) w/ Browserify for modularity and dependency bundling
- npm for all dependencies

## Which browsers are supported?

This project supports IE10+ in an attempt to find vanilla JavaScript usable on the frontend without the need for libraries such as jQuery (for example, IE9 doesn't even support ``Element.classList``)

Soon after IE10 is killed off officially by Microsoft (currently scheduled for [January 12, 2016](https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support)), the minimum browser required will become IE11. The hope is that eventually we can reach a state whereby only evergreen browsers are supported (Chrome, Firefox, Edge, et cetera)

## How do I utilise this repository?

1. Ensure you have npm (bundled with Node) installed globally. Of course you'll need Git installed too
2. Clone the repo
3. Rename ``.env.example`` to ``.env`` and edit the variables as required
4. Run ``npm install`` to install all dependencies
5. Run ``node --use_strict app/index`` to start the server on port 5000 (accessible at [localhost:5000](http://localhost:5000)). Optionally, consider running nodemon for live reloading
6. Finally run ``gulp`` to start the various tasks. This will start a [BrowserSync](http://www.browsersync.io/) instance on port 3000, mirroring the content on the node server above

## Styleguide

This project largely follows the CSS guidelines you can view here: [cssguidelin.es](http://cssguidelin.es/)

In a nutshell:

- BEM (Block, Element, Modifier) class naming convention
- Attempt to restrict lines to 80 characters wide
- Modular incl/ file structure
- Try to avoid excessive indentation
- Above all else - **consistency**

With regards to JavaScript, this project adheres to the [semistandard](https://github.com/Flet/semistandard) code style. For the unfamiliar, this is identical to the [standard](https://github.com/feross/standard) code style with the addition of semi colons for improved readability and fewer edge case issues
