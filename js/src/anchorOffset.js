(function() {

  var anchorOffset = {
    init() {
      this.cacheDom();
      this.getStyles();
      this.setOffset();
    },
    cacheDom() {
			this.nav = document.getElementById('jsNav');
      this.anchors = document.getElementsByClassName('anchor');
    },
    getStyles() {
      var navStyles = window.getComputedStyle(this.nav);
      this.offset = '-' + parseInt(navStyles.getPropertyValue('height')) + 'px';
    },
    setOffset() {
      for (var i = 0; i < this.anchors.length; i++) {
        this.anchors[i].style.top = this.offset;
      }
    }
  };
  anchorOffset.init();

})();
