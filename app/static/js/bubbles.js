module.exports = {
  activated: false,
  numBubbles: 40,
  minimumBubbleSizeInPx: 3,
  maximumBubbleSizeInPx: 10,
  bubbleMinStartPositionPercent: 30,
  bubbleMaxStartPositionPercent: 70,
  bubbleMinAnimateTimeInSeconds: 10,
  bubbleMaxAnimateTimeInSeconds: 25,
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
    for (let i = 0; i < this.numBubbles; i++) {
      let bubbleElement = document.createElement('div');
      bubbleElement.className = 'bubble-node';
      this.bubblesContainer.appendChild(bubbleElement);
    }
    this.alterBubbles();
  },
  alterBubbles() {
    let bubbleNodes = document.getElementsByClassName('bubble-node');
    for (let i = 0; i < bubbleNodes.length; i++) {
      let bubblePosition = Math.floor(Math.random() * (this.bubbleMaxStartPositionPercent - this.bubbleMinStartPositionPercent)) + this.bubbleMinStartPositionPercent;
      let bubbleSize = this.minimumBubbleSizeInPx + Math.floor(Math.random() * (this.maximumBubbleSizeInPx - this.minimumBubbleSizeInPx + 1)) + 'px';
      let bubbleAnimateTime = Math.floor(Math.random() * (this.bubbleMaxAnimateTimeInSeconds - this.bubbleMinAnimateTimeInSeconds)) + this.bubbleMinAnimateTimeInSeconds;

      bubbleNodes[i].style.width = bubbleSize;
      bubbleNodes[i].style.height = bubbleSize;
      bubbleNodes[i].style.left = bubblePosition + '%';
      bubbleNodes[i].style.animationDuration = bubbleAnimateTime + 's';
    }
  },
  // BUG: this hides all bubbles as soon as any of the bubbles are done animating
  removeBubbles() {
    this.bubblesContainer.style.display = 'none';
  }
};
