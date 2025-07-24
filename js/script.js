if (window.top !== window.self) {
  window.top.location = window.self.location;
}

function criarEstrelas(container, quantidade, tamanhoMin, tamanhoMax) {
  for (let i = 0; i < quantidade; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * (tamanhoMax - tamanhoMin) + tamanhoMin;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.6 + 0.3;
    const animations = ['tkl', 'tkl2', 'tkl3'];
    const animation = animations[Math.floor(Math.random() * animations.length)];
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    star.style.opacity = opacity;
    star.style.animationName = animation;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    container.appendChild(star);
  }
}

const camada1 = document.querySelector('[data-layer="1"]');
const camada2 = document.querySelector('[data-layer="2"]');
const camada3 = document.querySelector('[data-layer="3"]');
const isMobile = window.innerWidth < 768;

criarEstrelas(camada1, isMobile ? 20 : 50, 1, 2);
criarEstrelas(camada2, isMobile ? 30 : 70, 2, 3);
criarEstrelas(camada3, isMobile ? 40 : 100, 3, 4);

const texto = document.getElementById('texto');
const musica = document.getElementById('musica');
const creditos = document.getElementById('creditos');
let primeiraVez = true;

function toggleMusica() {
  if (musica.paused) {
    musica.play().catch(() => {});
    if (primeiraVez) {
      creditos.classList.add('mostrar');
      setTimeout(() => {
        creditos.classList.remove('mostrar');
      }, 4000);
      primeiraVez = false;
    }
  } else {
    musica.pause();
  }
}

texto.addEventListener('click', toggleMusica);
texto.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMusica();
  }
});

document.addEventListener('touchmove', (e) => {
  e.preventDefault();
}, { passive: false });

document.addEventListener('scroll', () => {
  window.scrollTo(0, 0);
});

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);
  camada1.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
  camada2.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  camada3.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
});

window.addEventListener('load', () => {
  camada1.classList.add('aparecer');
  setTimeout(() => camada2.classList.add('aparecer'), 200);
  setTimeout(() => camada3.classList.add('aparecer'), 400);
  musica.load();
});
