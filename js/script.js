const starsContainer = document.querySelector('.estrelas');

for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  const size = Math.random() * 4 + 2;
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

  starsContainer.appendChild(star);
}

const texto = document.getElementById('texto');
const musica = document.getElementById('musica');
const creditos = document.getElementById('creditos');
let primeiraVez = true;

texto.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
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
});