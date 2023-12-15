// Función para mostrar dinámicamente las casillas de URL de fotos
function mostrarCasillasFotos() {
    var numFotos = parseInt(document.getElementById('numFotos').value);
    var casillasFotos = document.getElementById('casillasFotos');

    // Limpiar las casillas existentes
    casillasFotos.innerHTML = '';

    // Mostrar las casillas de URL de fotos solo si se selecciona un número mayor que 0
    if (numFotos > 0) {
        casillasFotos.style.display = 'block';

        for (var i = 0; i < numFotos; i++) {
            // Crear un contenedor para cada conjunto de etiqueta e input
            var container = document.createElement('div');
            container.classList.add('foto-container'); // Agregar clase para estilos CSS

            container.appendChild(crearLabel('URL de la Foto ' + (i + 1) + ':'));
            container.appendChild(crearInput('text', 'urlFoto' + (i + 1)));

            // Ajustar el espacio entre las casillas de URL de fotos
            container.style.marginBottom = '10px';
            container.style.marginTop = '5px';

            // Agregar el contenedor al contenedor de casillasFotos
            casillasFotos.appendChild(container);
        }
    } else {
        casillasFotos.style.display = 'none';
    }
}

// Llama a la función mostrarCasillasFotos cuando cambia el número de fotos
document.getElementById('numFotos').addEventListener('change', mostrarCasillasFotos);

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

// Llama a la función mostrarCasillasFotos al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCasillasFotos);
