// Función para reproducir videos locales
function playLocalVideo(videoPath) {
  // Pausar el carrusel
  $('#carouselExampleCaptions').carousel('pause');
  
  // Obtener elemento de video
  const videoPlayer = document.getElementById('localVideo');
  
  // Configurar fuente del video
  videoPlayer.src = videoPath;
  
  // Mostrar modal
  $('#videoModal').modal('show');
  
  // Intentar reproducir (puede requerir interacción del usuario en algunos navegadores)
  const playPromise = videoPlayer.play();
  
  // Manejar posibles errores de reproducción
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log('Reproducción automática prevenida:', error);
      // Mostrar controles para que el usuario inicie manualmente
      videoPlayer.controls = true;
    });
  }
  
  // Limpiar al cerrar el modal
  $('#videoModal').on('hidden.bs.modal', function() {
    videoPlayer.pause();
    videoPlayer.src = '';
    videoPlayer.controls = false;
    $('#carouselExampleCaptions').carousel('cycle');
  });
}
