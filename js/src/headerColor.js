var nav = document.getElementsByTagName('nav');
var navStyles = window.getComputedStyle(nav[0]);
var navColorActivateClassName = 'active';

var fold = document.getElementsByClassName('title');
var foldStyles = window.getComputedStyle(fold[0]);
var hitboxSize = parseInt(foldStyles.getPropertyValue('padding-top')) - parseInt(navStyles.getPropertyValue('height'));

document.addEventListener('scroll', function() {
	// If below the fold
	if (window.pageYOffset > hitboxSize) {
		nav[0].classList.add(navColorActivateClassName);
	} else {
		nav[0].classList.remove(navColorActivateClassName);
	}
});
