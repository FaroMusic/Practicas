// Función para mostrar dinámicamente las casillas de URL de videos
function mostrarCasillasURL() {
    var numVideos = parseInt(document.getElementById('numVideos').value);
    var casillasURL = document.getElementById('casillasURL');

    // Limpiar las casillas existentes
    casillasURL.innerHTML = '';

    // Mostrar las casillas de URL solo si se selecciona un número mayor que 0
    if (numVideos > 0) {
        casillasURL.style.display = 'block';

        for (var i = 0; i < numVideos; i++) {
            // Crear un contenedor para cada conjunto de etiqueta e input
            var container = document.createElement('div');
            container.classList.add('video-container'); // Agregar clase para estilos CSS

            var label = crearLabel('URL del video ' + (i + 1) + ':');
            var input = crearInput('text', 'urlVideo' + (i + 1));
           

            // Agregar evento click para abrir el buscador de YouTube
            input.addEventListener('click', function () {
                abrirBuscadorYouTube(this); // Pasar el input como parámetro
            });

            container.appendChild(label);
            container.appendChild(input);
            

            // Agregar el contenedor al contenedor de casillasURL
            casillasURL.appendChild(container);
        }
    } else {
        casillasURL.style.display = 'none';
    }
}

// Llama a la función mostrarCasillasURL cuando cambia el número de videos
document.getElementById('numVideos').addEventListener('change', mostrarCasillasURL);

// Función para crear un elemento label
function crearLabel(texto) {
    var label = document.createElement('label');
    label.textContent = texto;
    return label;
}

// Función para crear un elemento input
function crearInput(type, name) {
    var input = document.createElement('input');
    input.type = type;
    input.name = name;
    return input;
}

// Función para abrir el buscador de YouTube en una nueva ventana o pestaña
/*function abrirBuscadorYouTube(input) {
    // Abrir el buscador de YouTube en una nueva ventana o pestaña
    var ventanaBuscador = window.open('https://www.youtube.com/', '_blank');

    // Agregar un evento para cerrar la ventana y recuperar la URL cuando se selecciona el video
    ventanaBuscador.onbeforeunload = function () {
        // Simplemente como ejemplo, aquí podrías obtener la URL seleccionada de la ventana de búsqueda
        var urlSeleccionada = obtenerURLSeleccionadaDesdeVentana(ventanaBuscador);

        // Establecer la URL seleccionada en el input correspondiente
        input.value = urlSeleccionada;
    };
}*/

// Función para obtener la URL seleccionada desde la ventana de búsqueda
function obtenerURLSeleccionadaDesdeVentana(ventana) {
    // Lógica para obtener la URL seleccionada desde la ventana de búsqueda
    // En este ejemplo, se retorna una URL ficticia para demostración
    return 'https://www.youtube.com/watch?v=VIDEO_ID';
}

// Llamada inicial a la función mostrarCasillasURL para configurar la página según el valor inicial
document.addEventListener('DOMContentLoaded', mostrarCasillasURL);
