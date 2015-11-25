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

## Which browsers are supported?

This project supports IE10+ in an attempt to find vanilla JavaScript usable without the need for libraries such as jQuery (for example, IE9 doesn't even support ``Element.classList``).

Soon after IE10 is killed off officially by Microsoft (currently scheduled for [January 12, 2016](https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support)), the minimum browser required will become IE11. The hope is that eventually we can reach a state whereby only evergreen browsers are supported (Chrome, Firefox, Edge, et cetera).

## How do I utilise this repository?

1. Ensure you have npm (node) and Composer installed globally. Of course you'll need Git installed too. Your server will need to be able to run PHP (minimum required version should be around 5.4 approx)
2. Clone the repo
3. Rename ``.env.example`` to ``.env`` and edit the variables as required
4. Run ``npm install && composer install`` to install all dependencies
5. Now run ``gulp`` to start the task. Note that this will automatically start a [BrowserSync](http://www.browsersync.io/) instance

## Styleguide

This project largely follows the CSS guidelines you can view here: [cssguidelin.es](http://cssguidelin.es/)

In a nutshell:

- BEM (Block, Element, Modifier) class naming convention
- Attempt to restrict lines to 80 characters wide
- Modular incl/ file structure
- Try to avoid excessive indentation
- Above all else - **consistency**

The biggest diversion from that guide is that this project uses tabs instead of spaces. Tabs are simply superior *takes cover*
