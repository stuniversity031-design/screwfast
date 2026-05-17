import '@styles/lenis.css';

import Lenis from 'lenis';

const lenis = new Lenis({
  autoRaf: true,
});

// Fix hash link scrolling
document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href').replace('/', '');
    const target = document.querySelector(id);
    if (target) {
      lenis.scrollTo(target, { offset: -100 });
    }
  });
});
