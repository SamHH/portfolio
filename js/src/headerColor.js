(function() {

	var alterHeaderColorOnScroll = {
		init() {
			this.cacheDom();
			this.getStyles();
			this.bindEvents();
		},
		cacheDom() {
			this.nav = document.getElementsByTagName('nav');
			this.fold = document.getElementsByClassName('title');
		},
		getStyles() {
			var navStyles = window.getComputedStyle(this.nav[0]);
			var foldStyles = window.getComputedStyle(this.fold[0]);
			this.hitboxSize = parseInt(foldStyles.getPropertyValue('padding-top')) - parseInt(navStyles.getPropertyValue('height'));
			this.navColorActivateClassName = 'active';
		},
		bindEvents() {
			document.addEventListener('scroll', this.updateHeader.bind(this));
		},
		updateHeader() {
			if (window.pageYOffset > this.hitboxSize) {
				this.nav[0].classList.add(this.navColorActivateClassName);
			} else {
				this.nav[0].classList.remove(this.navColorActivateClassName);
			}
		}
	};
	alterHeaderColorOnScroll.init();

})();
