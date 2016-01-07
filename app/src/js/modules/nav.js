module.exports = {
  throttle: require('lodash/function/throttle'),

  activeTabClassName: 'active',
  init() {
    this.cacheDom();
    this.checkCompat();
  },
  cacheDom() {
    this.nav = document.getElementById('jsNav');
    this.fold = document.getElementById('jsFold');
    this.anchors = document.getElementsByClassName('anchor');
  },
  checkCompat() {
    // Only run on pages with these elements
    if (!this.nav || !this.fold) return;

    // If classList is supported, set header position to fixed and run other scripts
    if (this.nav.classList) {
      this.setNavFixed();
      this.setStyleVars();
      this.setNavOffset();
      this.updateHeaderActiveState(); // Run once to activate on page load prior to any scrolling
      this.checkScrollPosRelToAnchors(); // Run once to activate on page load prior to any scrolling
      this.bindEvents();
    }
  },
  setStyleVars() {
    let navStyles = window.getComputedStyle(this.nav);
    let foldStyles = window.getComputedStyle(this.fold);

    this.hitboxSize = parseInt(foldStyles.getPropertyValue('padding-top')) - parseInt(navStyles.getPropertyValue('height'));
    this.navColorActivateClassName = 'active';
    this.anchorOffsetDueToNav = '-' + parseInt(navStyles.getPropertyValue('height')) + 'px';
  },
  bindEvents() {
    document.addEventListener('scroll', this.throttle(function () { // Throttle prevents these functions from running more often than the time specified in ms
      this.updateHeaderActiveState();
      this.checkScrollPosRelToAnchors();
    }.bind(this), 500));
  // document.addEventListener('scroll', _.throttle(function () { // Throttle prevents these functions from running more often than the time specified in ms
  //   this.updateHeaderActiveState();
  //   this.checkScrollPosRelToAnchors();
  // }.bind(this), 500));
  },
  setNavFixed() {
    this.nav.style.position = 'fixed';
  },
  setNavOffset() {
    for (let i = 0; i < this.anchors.length; i++) {
      this.anchors[i].style.top = this.anchorOffsetDueToNav;
    }
  },
  updateHeaderActiveState() {
    if (window.pageYOffset > this.hitboxSize) {
      this.nav.classList.add(this.navColorActivateClassName);
    } else {
      this.nav.classList.remove(this.navColorActivateClassName);
    }
  },
  checkScrollPosRelToAnchors() {
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
  setActiveNavTab( tabToActiveIndex) {
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
