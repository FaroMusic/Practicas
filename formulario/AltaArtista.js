// Función para mostrar dinámicamente las casillas de conciertos
function mostrarCasillasConciertos() {
    var numeroConciertos = parseInt(document.getElementById('numeroSeleccion').value);
    var casillasBusqueda = document.getElementById('casillasBusquedaConciertos');

    // Limpiar las casillas existentes
    casillasBusqueda.innerHTML = '';

    // Crear nuevas casillas según el número seleccionado
    for (var i = 0; i < numeroConciertos; i++) {
        var div = document.createElement('div');
        div.className = 'seccion-conciertos';

        div.appendChild(crearCampoFecha(i));
        div.appendChild(crearCampoLugar(i));
        div.appendChild(crearCampoNombreEvento(i));
        div.appendChild(crearCampoTipoEvento(i));
        div.appendChild(crearCampoURLCompra(i));

        // Agregar el contenedor al contenedor principal
        casillasBusqueda.appendChild(div);
    }

    // Añadir un ancla al final de las casillas para desplazarse libremente
    var finalCasillas = document.createElement('div');
    finalCasillas.id = 'finalCasillas';
    casillasBusqueda.appendChild(finalCasillas);

    // Desplazar la vista hacia el ancla al final de las casillas
    var anclaFinalCasillas = document.getElementById('finalCasillas');
    anclaFinalCasillas.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Función para crear el campo de fecha
function crearCampoFecha(indice) {
    var labelFecha = crearLabel('Fecha del concierto ' + (indice + 1) + ': ');

    var inputFecha = crearInput('date', 'fecha' + (indice + 1));

    return agruparElementos([labelFecha, inputFecha, document.createElement('br')]);
}

// Función para crear el campo de lugar
function crearCampoLugar(indice) {
    var labelLugar = crearLabel('Lugar del concierto ' + (indice + 1) + ': ');

    var inputLugar = crearInput('text', 'lugar' + (indice + 1));

    return agruparElementos([labelLugar, inputLugar, document.createElement('br')]);
}

// Función para crear el campo de nombre del evento
function crearCampoNombreEvento(indice) {
    var labelNombreEvento = crearLabel('Nombre del evento ' + (indice + 1) + ': ');

    var inputNombreEvento = crearInput('text', 'nombreEvento' + (indice + 1));

    return agruparElementos([labelNombreEvento, inputNombreEvento, document.createElement('br')]);
}

// Función para crear el campo de tipo de evento
function crearCampoTipoEvento(indice) {
    var labelTipoEvento = crearLabel('Tipo de Evento del concierto ' + (indice + 1) + ': ');

    var selectTipoEvento = document.createElement('select');
    selectTipoEvento.name = 'tipoEvento' + (indice + 1);

    var optionGratuito = crearOption('Gratuito', 'Gratuito');
    var optionPago = crearOption('Pago', 'Pago');

    selectTipoEvento.appendChild(optionGratuito);
    selectTipoEvento.appendChild(optionPago);

    var divURL = document.createElement('div');

    var labelURL = crearLabel('URL de compra:');
    labelURL.classList.add('urlLabel'); // Clase para ocultar/mostrar

    var inputURL = crearInput('text', 'url' + (indice + 1));
    inputURL.classList.add('urlInput'); // Clase para ocultar/mostrar

    // Agregar un evento onchange al tipo de evento para mostrar la URL solo si es "Pago"
    selectTipoEvento.addEventListener('change', function () {
        var urlLabel = this.parentNode.querySelector('.urlLabel'); // Buscar por clase
        var urlInput = this.parentNode.querySelector('.urlInput'); // Buscar por clase
        if (this.value === 'Pago') {
            urlLabel.style.display = 'inline-block';
            urlInput.style.display = 'inline-block';
        } else {
            urlLabel.style.display = 'none';
            urlInput.style.display = 'none';
        }
    });

    divURL.appendChild(labelURL);
    divURL.appendChild(inputURL);

    // Inicialmente ocultar la etiqueta y la casilla de URL
    labelURL.style.display = 'none';
    inputURL.style.display = 'none';

    return agruparElementos([labelTipoEvento, selectTipoEvento, document.createElement('br'), divURL]);
}

// Función para crear el campo de URL de compra
function crearCampoURLCompra(indice) {
    // No es necesario crear un nuevo div, ya que la URL se agrupa con el tipo de evento.
    return document.createElement('div');
}

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

// Función para crear un elemento option
function crearOption(value, texto) {
    var option = document.createElement('option');
    option.value = value;
    option.textContent = texto;
    return option;
}

// Función para agrupar elementos en un contenedor
function agruparElementos(elementos) {
    var contenedor = document.createElement('div');
    elementos.forEach(function (elemento) {
        contenedor.appendChild(elemento);
    });
    return contenedor;
}

// Vincular el evento onchange para las casillas de URL
function vincularEventosURL() {
    // Agrega aquí la lógica para vincular eventos de URL si es necesario
}

// Evitar el comportamiento predeterminado del formulario al hacer clic en el botón Enviar
document.getElementById('formularioAltaArtista').addEventListener('submit', function (event) {
    event.preventDefault();
});

// Llamada inicial a la función mostrarCasillasConciertos para configurar la página según el valor inicial
document.addEventListener('DOMContentLoaded', mostrarCasillasConciertos);
