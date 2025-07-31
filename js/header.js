// Comportamiento del header al hacer scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  const topBar = document.querySelector('.top-bar');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 100) {
    header.classList.add('scrolled');
    topBar.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    topBar.classList.remove('scrolled');
  }
});

// Smooth scrolling para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Inicializar el video para autoplay en móviles (requiere interacción del usuario)
document.addEventListener('DOMContentLoaded', function() {
  const heroVideo = document.getElementById('hero-video');
  
  // Intentar reproducir el video (puede fallar en móviles sin interacción)
  const playPromise = heroVideo.play();
  
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      // Mostrar un botón de play si el autoplay falla
      const playButton = document.createElement('button');
      playButton.innerHTML = 'Play Video';
      playButton.className = 'btn btn-warning btn-lg';
      playButton.style.position = 'absolute';
      playButton.style.top = '50%';
      playButton.style.left = '50%';
      playButton.style.transform = 'translate(-50%, -50%)';
      playButton.style.zIndex = '10';
      playButton.addEventListener('click', function() {
        heroVideo.play();
        this.remove();
      });
      
      document.querySelector('.hero-video-container').appendChild(playButton);
    });
  }
});