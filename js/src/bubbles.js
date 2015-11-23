(function() {

  var bubbles = {
    activated: false,
    numBubbles: 25,
    minimumBubbleSizeInPx: 3,
    maximumBubbleSizeInPx: 10,
    init() {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom() {
      this.bubblesContainer = document.getElementById('jsBubbles');
    },
    bindEvents() {
      document.addEventListener('scroll', this.checkBubblesVisibility.bind(this));
      this.bubblesContainer.addEventListener('animationend', this.removeBubbles.bind(this));
    },
    // This can probably be improved:
    // Presently just triggers once at bottom of page
    // Also doesn't yet remove above scroll event listener and instead uses the this.activated boolean
    checkBubblesVisibility() {
      if (this.activated === false && window.pageYOffset === document.body.clientHeight - window.innerHeight) {
        this.createBubbles();
        this.activated = true;
      }
    },
    createBubbles() {
      for (var i = 0; i < this.numBubbles; i++) {
        var bubbleElement = document.createElement('div');
        bubbleElement.className = 'bubble-node';
        this.bubblesContainer.appendChild(bubbleElement);
      }
      this.alterBubbles();
    },
    alterBubbles() {
      var bubbleNodes = document.getElementsByClassName('bubble-node');
      for (var i = 0; i < bubbleNodes.length; i++) {
        var bubblePosition = Math.floor(Math.random() * 101);
        var bubbleSize = this.minimumBubbleSizeInPx + Math.floor(Math.random() * (this.maximumBubbleSizeInPx - this.minimumBubbleSizeInPx + 1)) + 'px';

        bubbleNodes[i].style.width = bubbleSize;
        bubbleNodes[i].style.height = bubbleSize;
        bubbleNodes[i].style.left = bubblePosition + '%';
      }
    },
    removeBubbles() {
      this.bubblesContainer.style.display = 'none';
    }
  };
  bubbles.init();

})();
