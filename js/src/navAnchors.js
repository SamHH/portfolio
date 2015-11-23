(function() {

  var updateActiveNavByAnchor = {
    activeTabClassName: 'active',
    init() {
      this.cacheDom();
      this.bindEvents();
      this.checkPosition(); // Run once to activate on page load prior to any scrolling
    },
    cacheDom() {
      this.nav = document.getElementById('jsNav');
      this.anchors = document.getElementsByClassName('anchor');
    },
    bindEvents() {
      document.addEventListener('scroll', _.throttle(this.checkPosition.bind(this), 500));
    },
    checkPosition() {
      let furthest = null;

      // If at end of document, use last anchor (as good chance last anchor not big enough to get triggered otherwise)
      if (window.pageYOffset == document.body.clientHeight - window.innerHeight) {
        furthest = this.anchors.length - 1;
      } else {
        for (let i = 0; i < this.anchors.length; i++) {
          // If scrolled to or past the anchor position set this as new furthest and move onto next anchor
          if (window.pageYOffset >= this.anchors[i].offsetTop) {
            furthest = i;
          } else {
            break;
          }
        }
      }
      this.setActiveNavTab(furthest);
    },
    setActiveNavTab(tabToActiveIndex) {
      // If new active tab not already set as active tab
      if (!this.nav.getElementsByTagName('li')[tabToActiveIndex].classList.contains(this.activeTabClassName)) {
        // Remove active state from previously active tab
        if (this.nav.getElementsByClassName(this.activeTabClassName).length) {
          this.nav.getElementsByClassName(this.activeTabClassName)[0].classList.remove(this.activeTabClassName);
        }

        // Add active state to new active tab
        this.nav.getElementsByTagName('li')[tabToActiveIndex].classList.add(this.activeTabClassName);
      }
    }
  };
  updateActiveNavByAnchor.init();

})();
