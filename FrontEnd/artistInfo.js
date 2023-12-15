document.addEventListener('DOMContentLoaded', function () {
    // Obtener el contenedor y el título
    const textContainer = document.querySelector('.text-container');
    const title = document.querySelector('.container-title', textContainer);
  
    // Obtener datos desde el archivo JSON (puedes cargarlo mediante una petición AJAX o como prefieras)
    fetch('artistInfo.json')
      .then(response => response.json())
      .then(data => {
        // Establecer el título del contenedor
        title.textContent = data.artistInfo.title;
  
        // Obtener el contenido del artista
        const artistContent = data.artistInfo.content;
  
        // Iterar sobre el contenido y agregar párrafos al contenedor
        artistContent.forEach(paragraph => {
          const p = document.createElement('p');
          p.textContent = paragraph;
          textContainer.appendChild(p);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  