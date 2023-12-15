function enviarDatos() {
    var nombre = document.getElementById('nombre').value;
    var historia = document.getElementById('historia').value;

    var data = {
        nameArtist: nombre,
        bio: historia
    };

    fetch('http://localhost:8081/api/artists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la solicitud');
        }
    })
    .then(artist => {
        console.log('Artista creado:', artist);
        mostrarMensajeExitoso();
    })
    .catch(error => {
        console.error('Error al crear el artista:', error);
        // Puedes manejar el error de otra manera según tus necesidades
    });
}

function mostrarMensajeExitoso() {
    alert('¡Envío exitoso!'); // Puedes utilizar una librería de notificaciones en lugar de alert
}

