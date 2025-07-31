window.addEventListener('scroll', function () {
    const barra = document.querySelector('.barra');
    const menu = document.querySelector('.menu');
    const normalizar = document.querySelector('.hero');
    const scrollY = window.scrollY;

    // Cambia este valor si necesitas otro punto de activación
    const alturaTrigger = 100;

    if (scrollY >= alturaTrigger) {
      barra.classList.add('fijar-barra');
      menu.classList.add('fijar-menu');
      normalizar.classList.add('normalizar');
    } else {
      barra.classList.remove('fijar-barra');
      menu.classList.remove('fijar-menu');
      normalizar.classList.remove('normalizar');
    }
});

const activador = document.querySelector('.activador');
const menu = document.querySelector('#menu');

activador.addEventListener ( 'click' , () => {
  menu.classList.toggle('activo');
} )