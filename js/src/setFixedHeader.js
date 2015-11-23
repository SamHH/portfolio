(function() {

  var setFixedHeaderForModernBrowsers = {
    init() {
      this.cacheDom();
      this.checkCompat();
    },
    cacheDom() {
      this.header = document.getElementById('jsNav');
    },
    checkCompat() {
      // If classList is supported, set header position to fixed
      if (this.header.classList) {
        this.setHeaderFixed();
      }
    },
    setHeaderFixed() {
      this.header.style.position = 'fixed';
    }
  };
setFixedHeaderForModernBrowsers.init();
})();
