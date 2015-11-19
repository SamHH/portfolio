// TODO: update url too

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
      document.addEventListener('scroll', this.checkPosition.bind(this));
    },
    checkPosition() {
      var furthest = null;
      // If at end of document, use last anchor (as good chance last anchor not big enough to get triggered otherwise)
      if (window.scrollY == document.body.clientHeight - window.innerHeight) {
        this.setActiveNavTab(this.anchors.length - 1);
      } else {
        for (var i = 0; i < this.anchors.length; i++) {
          // If scrolled to or past the anchor position set this as new furthest and move onto next anchor
          if (window.scrollY >= this.anchors[i].offsetTop) {
            furthest = i;
          } else {
            this.setActiveNavTab(furthest);
            break;
          }
        }
      }
    },
    setActiveNavTab(navTab) {
      // If new active tab not already set as active tab
      if (!this.nav.getElementsByTagName('li')[navTab].classList.contains(this.activeTabClassName)) {
        // Remove active state from previously active tab
        if (this.nav.getElementsByClassName(this.activeTabClassName).length) {
          this.nav.getElementsByClassName(this.activeTabClassName)[0].classList.remove(this.activeTabClassName);
        }

        // Add active state to new active tab
        this.nav.getElementsByTagName('li')[navTab].classList.add(this.activeTabClassName);
      }
    }
  };
  updateActiveNavByAnchor.init();

})();
