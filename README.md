# SamHH | Portfolio

## Which files aren't in this repository?

Nothing is exempted from this repository excluding dependencies

## Which technologies are in use here?

This project runs Node on the backend with various npm dependencies such as Express

### Meanwhile, on the frontend...

- Jade templating
- Sass (SCSS syntax) preprocessor
- Gulp w/ various plugins incl/ PostCSS
- ES2015 JavaScript (transpiled using Babel) w/ Browserify for modularity and dependency bundling
- npm for all dependencies

## Which browsers are supported?

- All modern/evergreen browsers

Older browsers such as Internet Explorer are not explicitly supported for the sake of me being able to explore newer tech in development

## How do I utilise this repository?

1. Ensure you have npm (bundled with Node) installed globally. Of course you'll need Git installed too
2. Clone the repo
3. Rename ``.env.example`` to ``.env`` and edit the variables as required
4. Run ``npm install`` to install all dependencies
5. Run ``npm start`` to start the server on (by default) port 5000 (accessible at [localhost:5000](http://localhost:5000))
6. Finally run ``gulp develop`` to start the various tasks. This will start a [BrowserSync](http://www.browsersync.io/) instance on (by default) port 5001, mirroring the content on the node server above

## Styleguide

This project largely follows the CSS guidelines you can view here: [cssguidelin.es](http://cssguidelin.es/)

In a nutshell:

- BEM (Block, Element, Modifier) class naming convention
- Attempt to restrict lines to 80 characters wide
- Modular incl/ file structure
- Try to avoid excessive indentation
- Above all else - **consistency**

With regards to JavaScript, this project adheres to the [standard](https://github.com/feross/standard) code style
