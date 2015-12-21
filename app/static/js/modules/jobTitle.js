module.exports = {
  init() {
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom() {
    this.target = document.getElementById('jsJobTitleText');
  },
  bindEvents() {
    this.target.onclick = this.changeText;
  },
  changeText() {
    this.innerHTML = 'full-stack web developer specialising in frontend';
    this.style.animation = 'none';
    this.style.cursor = 'default';
  }
};
