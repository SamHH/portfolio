(function() {

	var alterHeaderColorOnScroll = {
		init() {
			this.cacheDom();
			this.getStyles();
			this.bindEvents();
		},
		cacheDom() {
			this.nav = document.getElementById('jsNav');
			this.fold = document.getElementById('jsFold');
		},
		getStyles() {
			var navStyles = window.getComputedStyle(this.nav);
			var foldStyles = window.getComputedStyle(this.fold);
			this.hitboxSize = parseInt(foldStyles.getPropertyValue('padding-top')) - parseInt(navStyles.getPropertyValue('height'));
			this.navColorActivateClassName = 'active';
		},
		bindEvents() {
			document.addEventListener('scroll', this.updateHeader.bind(this));
		},
		updateHeader() {
			if (window.pageYOffset > this.hitboxSize) {
				this.nav.classList.add(this.navColorActivateClassName);
			} else {
				this.nav.classList.remove(this.navColorActivateClassName);
			}
		}
	};
	alterHeaderColorOnScroll.init();

})();
