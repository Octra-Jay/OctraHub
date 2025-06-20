// Partikel-Hintergrund
particlesJS('particles', {
  particles: {
    number: { value: 50 },
    color: { value: '#E63946' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { speed: 2 }
  }
});

// Anime.js Beispiel-Animation
anime({
  targets: 'h1',
  translateY: [-50, 0],
  opacity: [0, 1],
  duration: 2000,
  easing: 'easeOutExpo'
});