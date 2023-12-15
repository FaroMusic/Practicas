document.addEventListener('DOMContentLoaded', function () {
  // Obtener el contenedor de conciertos y su título
  const concertsContainer = document.querySelector('.concerts-container');
  const concertsTitle = document.querySelector('.container-title', concertsContainer);

  // Obtener datos desde el archivo JSON para conciertos
  fetch('concertInfo.json')
    .then(response => response.json())
    .then(data => {
      // Establecer el título del contenedor de conciertos
      concertsTitle.textContent = data.concertInfo.title;

      // Obtener datos de la tabla de conciertos
      const concertsData = data.concertInfo.tableData;

      // Crear la tabla y sus encabezados
      const concertTable = document.createElement('table');
      concertTable.classList.add('concert-table');

      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      const headers = ['Fecha', 'Artista', 'Ciudad', 'Evento', 'Precio'];

      headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });

      thead.appendChild(headerRow);
      concertTable.appendChild(thead);

      // Crear el cuerpo de la tabla y agregar datos
      const tbody = document.createElement('tbody');

      concertsData.forEach(concert => {
        const tr = document.createElement('tr');

        Object.values(concert).forEach((value, index) => {
          const td = document.createElement('td');
          td.textContent = value;

          if (index === 4) {  // Si es el quinto elemento (columna de botones)
            const button = document.createElement('button');
            button.classList.add('btn-gratuito');
            button.textContent = value;
            td.innerHTML = '';  // Limpiar el contenido del td
            td.appendChild(button);
          }

          tr.appendChild(td);
        });

        tbody.appendChild(tr);
      });

      concertTable.appendChild(tbody);
      concertsContainer.appendChild(concertTable);
    })
    .catch(error => console.error('Error fetching concert data:', error));
});
