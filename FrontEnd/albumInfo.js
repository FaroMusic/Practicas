document.addEventListener('DOMContentLoaded', function () {
  // Obtener el contenedor de discos y su título
  const albumsContainer = document.querySelector('.albums-container');
  const albumsTitle = document.querySelector('.container-title', albumsContainer);

  // Obtener datos desde el archivo JSON para discos
  fetch('albumInfo.json')
    .then(response => response.json())
    .then(data => {
      // Establecer el título del contenedor de discos
      albumsTitle.textContent = data.albumInfo.title;

      // Obtener datos de los discos
      const albumsData = data.albumInfo.albums;

      // Crear el contenedor de imágenes
      const imageContainer = document.createElement('div');

      // Iterar sobre los datos de los discos y agregar imágenes con enlaces al contenedor
      albumsData.forEach(album => {
        const img = document.createElement('img');
        img.src = album.src;
        img.alt = album.alt;

        // Establece el tamaño de las imágenes en el contenedor cuadrado
        img.style.width = '230px';
        img.style.height = '230px';

        const link = document.createElement('a');
        link.href = album.url; // Agrega el enlace al atributo href
        link.target = "_blank"; // Abre el enlace en una nueva pestaña
        link.appendChild(img);

        imageContainer.appendChild(link);
      });

      // Agregar el contenedor de imágenes al contenedor de discos
      albumsContainer.appendChild(imageContainer);
    })
    .catch(error => console.error('Error fetching album data:', error));
});
