footerHeight = $("footer").outerHeight();

numParticles = Math.round(footerHeight / 6);

particlesJS('particles-js', {
  canvas: {
    h: footerHeight
  },
  particles: {
    color: "#fff",
    size: 2,
    nb: numParticles,
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
