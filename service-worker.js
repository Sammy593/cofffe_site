if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('src/services/sw1.js')
        .then(registration => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
          console.error('Error al registrar el Service Worker:', error);
        });
    });
}