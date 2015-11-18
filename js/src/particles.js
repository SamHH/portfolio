(function() {

  var initialiseParticles = {
    init: function() {
      this.cacheDom();
      this.instantiateParticlesJS();
    },
    cacheDom: function() {
      this.particleContainer = document.getElementsByTagName('footer');
    },
    instantiateParticlesJS: function() {
      this.footerHeight = parseFloat(window.getComputedStyle(this.particleContainer[0], null).getPropertyValue('height'));
      this.numParticles = Math.round(this.footerHeight / 5);

      particlesJS('particles-js', {
        canvas: {
          h: this.footerHeight
        },
        particles: {
          color: "#fff",
          size: 2,
          nb: this.numParticles,
          line_linked: {
            distance: 130,
            color: "#ccc"
          },
          anim: {
            speed: 1
          }
        },
        interactivity: {
          enable: false
        }
      });
    }
  };
  initialiseParticles.init();

})();
