document.addEventListener('DOMContentLoaded', function () {
    // Obtener el contenedor de videos y su título
    const videosContainer = document.querySelector('.videos-container');
    const videosTitle = document.querySelector('.container-title', videosContainer);
  
    // Obtener datos desde el archivo JSON para videos
    fetch('videoInfo.json')
      .then(response => response.json())
      .then(data => {
        // Establecer el título del contenedor de videos
        videosTitle.textContent = data.videoInfo.title;
  
        // Obtener datos de los videos
        const videosData = data.videoInfo.videos;
  
        // Crear el contenedor de iframes
        const iframeContainer = document.createElement('div');
  
        // Iterar sobre los datos de los videos y agregar iframes al contenedor
        videosData.forEach(video => {
          const iframe = document.createElement('iframe');
          iframe.width = "80%";
          iframe.height = 350;
          iframe.src = video.src;
          iframe.allow = "autoplay; encrypted-media";
          iframe.allowFullscreen = true;
  
          iframeContainer.appendChild(iframe);
        });
  
        // Agregar el contenedor de iframes al contenedor de videos
        videosContainer.appendChild(iframeContainer);
      })
      .catch(error => console.error('Error fetching video data:', error));
  });
  