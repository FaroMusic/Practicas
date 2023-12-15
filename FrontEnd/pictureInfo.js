// Espera a que se cargue el DOM antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
  // Obtén el contenedor de fotos y su título
  const picturesContainer = document.querySelector('.pictures-container');
  const picturesTitle = document.querySelector('.container-title', picturesContainer);

  // Realiza una petición para obtener los datos desde el archivo JSON de fotos
  fetch('pictureInfo.json')
    .then(response => response.json())
    .then(data => {
      // Establece el título del contenedor de fotos
      picturesTitle.textContent = data.pictureInfo.title;

      // Obtiene los datos de las fotos
      const picturesData = data.pictureInfo.pictures;

      // Crea un contenedor para las imágenes
      const imageContainer = document.createElement('div');

      // Itera sobre los datos de las fotos y agrega imágenes al contenedor
      picturesData.forEach(picture => {
        // Crea un enlace para cada imagen
        const link = document.createElement('a');
        link.href = '#'; // Puedes agregar aquí el enlace a una página específica si es necesario

        // Crea un elemento de imagen
        const img = document.createElement('img');
        img.src = picture.src;
        img.alt = picture.alt;

        // Establece el tamaño de las imágenes en el contenedor cuadrado
        img.style.width = '230px';
        img.style.height = '230px';

        // Agrega un evento de clic al enlace para mostrar la imagen en un modal
        link.addEventListener('click', function (event) {
          event.preventDefault(); // Evita la acción predeterminada del enlace
          showModal(img.src, img.alt);
        });

        // Agrega la imagen al enlace
        link.appendChild(img);

        // Agrega el enlace al contenedor de imágenes
        imageContainer.appendChild(link);
      });

      // Agrega el contenedor de imágenes al contenedor de fotos
      picturesContainer.appendChild(imageContainer);
    })
    .catch(error => console.error('Error fetching picture data:', error));

  // Función para mostrar el modal con la imagen seleccionada
  function showModal(src, alt) {
    // Crea el modal
    const modal = document.createElement('div');
    modal.classList.add('modal-container', 'show-modal');

    // Crea la imagen dentro del modal
    const modalImg = document.createElement('img');
    modalImg.src = src;
    modalImg.alt = alt;

    // Establece el tamaño de la imagen en el modal
    modalImg.style.width = '800px';
    modalImg.style.height = '550px';

    // Agrega la imagen al modal
    modal.appendChild(modalImg);

    // Agrega el modal al cuerpo del documento
    document.body.appendChild(modal);

    // Agrega un evento de clic al modal para cerrarlo
    modal.addEventListener('click', function (event) {
      if (event.target === modal || event.target === modalImg) {
        closeModal(modal);
      }
    });
  }

  // Función para cerrar el modal
  function closeModal(modal) {
    document.body.removeChild(modal);
  }
});
