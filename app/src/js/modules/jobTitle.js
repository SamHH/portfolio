export default {
  init() {
    this.cacheDom()
    this.bindEvents()
  },
  cacheDom() {
    this.target = document.getElementById('jsJobTitleText')
  },
  bindEvents() {
    // Only run on pages with this element
    if (!this.target) return

    this.target.onclick = this.changeText
  },
  changeText() {
    this.innerHTML = 'full-stack web developer specialising in frontend'
    this.style.animation = 'none'
    this.style.cursor = 'default'
  }
}
