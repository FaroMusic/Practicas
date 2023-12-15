// Función para abrir YouTube en una nueva ventana o pestaña
function abrirYouTube() {
    window.open('https://www.youtube.com', '_blank');
}

// Función principal para mostrar las casillas de CDs
function mostrarCasillasCDs() {
    var numCDs = parseInt(document.getElementById('numCds').value);
    var casillasCDs = document.getElementById('casillasCDs');
    var containerPrincipal = document.querySelector('.container');

    // Limpiar las casillas existentes
    casillasCDs.innerHTML = '';

    // Mostrar las casillas de CDs solo si se selecciona un número mayor que 0
    if (numCDs > 0) {
        casillasCDs.style.display = 'block';

        // Generar casillas de CDs dinámicamente
        for (var i = 0; i < numCDs; i++) {
            var container = crearContenedorCD(i + 1);
            casillasCDs.appendChild(container);
        }

        // Ajustar la altura del contenedor principal
        ajustarAlturaContenedor(containerPrincipal);
    } else {
        casillasCDs.style.display = 'none';
    }
}

// Función para ajustar la altura del contenedor principal
function ajustarAlturaContenedor(container) {
    // Obtener la altura total de todos los elementos hijos
    var alturaContenido = Array.from(container.children).reduce(function (alturaTotal, child) {
        return alturaTotal + child.clientHeight;
    }, 0);

    // Agregar un espacio fijo entre los elementos para evitar superposiciones
    alturaContenido += numCDs * 10;

    container.style.height = alturaContenido + 'px';
}

// Función para crear un contenedor de CD con etiquetas, inputs y botones
function crearContenedorCD(numeroCD) {
    var container = document.createElement('div');
    container.classList.add('cd-container');

    var nombreLabelInput = crearLabelInput('Nombre del CD ' + numeroCD + ':', 'text', 'nombreCD' + numeroCD);
    var urlLabelInput = crearLabelInput('URL del CD ' + numeroCD + ':', 'text', 'urlCD' + numeroCD);

    container.appendChild(nombreLabelInput);
    container.appendChild(urlLabelInput);

    var botonesContainer = document.createElement('div');
    botonesContainer.classList.add('botones-container');

    var youtubeButton = crearBoton('Ir a YouTube', 'youtubeButton', 'margin-left: 30px', abrirYouTube);
    var buscarButton = crearBoton('Buscar', 'buscarButton' + numeroCD, 'margin-left: 30px', function() {
        buscarVideo(numeroCD, urlLabelInput);
    });

    botonesContainer.appendChild(youtubeButton);
    botonesContainer.appendChild(buscarButton);

    container.style.marginBottom = '10px';
    container.style.marginTop = '10px';

    container.appendChild(botonesContainer);

    return container;
}

// Función para crear un elemento label e input y agregarlos al contenedor
function crearLabelInput(labelText, inputType, inputName) {
    var label = document.createElement('label');
    label.textContent = labelText;

    var input = document.createElement('input');
    input.type = inputType;
    input.name = inputName;

    var container = document.createElement('div');
    container.appendChild(label);
    container.appendChild(input);

    return container;
}

// Función para crear un botón
function crearBoton(texto, id, estiloAdicional, onclickHandler) {
    var boton = document.createElement('input');
    boton.type = 'button';
    boton.value = texto;
    boton.id = id;

    if (estiloAdicional) {
        boton.style.cssText = estiloAdicional;
    }

    if (onclickHandler) {
        boton.onclick = onclickHandler;
    }

    return boton;
}

// Función para buscar y mostrar un video en el contenedor correspondiente
function buscarVideo(conciertoNumero, urlLabelInput) {
    var videoContainer = document.getElementById('videoContainer');
    var youtubeLink = urlLabelInput.querySelector('input').value;

    console.log('Enlace de YouTube ingresado:', youtubeLink);

    // Limpiar mensajes de error anteriores
    eliminarMensajeError();

    if (youtubeLink.trim() !== '') { // Verificar si se ingresó un URL
        if (youtubeLink.includes('youtube.com')) {
            var videoId = obtenerVideoId(youtubeLink);
            console.log('ID del video obtenido:', videoId);

            // Mostrar el video en un cuadro
            mostrarVideoEnCuadro(videoId, videoContainer, conciertoNumero);
        } else {
            mostrarMensajeError('Por favor, ingrese un enlace de YouTube válido.');
        }
    } else {
        mostrarMensajeError('Por favor, ingrese un enlace de YouTube.');
    }
}

// Función para mostrar el video en el contenedor
function mostrarVideoEnCuadro(videoId, container, conciertoNumero) {
    var nuevoContenedor = document.createElement('div');
    nuevoContenedor.id = 'videoContainer' + conciertoNumero;
    nuevoContenedor.classList.add('video-container');

    // Establecer estilos para que el video ocupe el máximo tamaño del contenedor
    nuevoContenedor.style.width = '100%';
    nuevoContenedor.style.height = '250px';

    var embedCode = '<iframe width="100%" height="250px" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
    nuevoContenedor.innerHTML = embedCode;

    // Buscar el botón de búsqueda correspondiente y obtener su contenedor
    var botonBuscar = document.getElementById('buscarButton' + conciertoNumero);
    var contenedorBotonBuscar = botonBuscar.parentNode;

    // Insertar el nuevo contenedor justo después del contenedor del botón de búsqueda
    contenedorBotonBuscar.insertBefore(nuevoContenedor, contenedorBotonBuscar.nextSibling);

    // Ajustar la altura del contenedor principal
    ajustarAlturaContenedor(container);
}

// Función para obtener el ID del video desde la URL de YouTube
function obtenerVideoId(url) {
    // Lógica para obtener el ID del video desde la URL
    // Esta implementación es muy simple y puede no cubrir todos los casos
    var videoId = url.split('v=')[1];
    var ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
}

// Función para mostrar mensajes de error
function mostrarMensajeError(mensaje) {
    alert(mensaje);
}

// Función para eliminar mensajes de error
function eliminarMensajeError() {
    // Puedes personalizar según tus necesidades
}

// Llama a la función mostrarCasillasCDs al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCasillasCDs);
