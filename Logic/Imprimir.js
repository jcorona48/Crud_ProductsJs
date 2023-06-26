/*
function generarPDF() {
    const table = document.getElementById('Tabla');
    const rows = table.getElementsByTagName('tr');
  
    // Ocultar columnas "Editar" y "Eliminar" en cada fila de la tabla
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      cells[3].style.display = 'none'; // Ocultar celda "Editar"
      cells[4].style.display = 'none'; // Ocultar celda "Eliminar"
    }
  
    // Crear una ventana emergente para imprimir
    const win = window.open('', '_blank');
    win.document.write(`
      <html>
      <head>
        <title>PDF</title>
        <style>
         Estilos generales 
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

         Estilos de la tabla 
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        th, td {
          padding: 8px;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #f2f2f2;
          text-align: left;
          font-weight: bold;
        }

         Estilos de los botones de la tabla 
        .delete-button {
          padding: 4px 8px;
          font-size: 14px;
          border-radius: 4px;
          border: none;
          background-color: #f44336;
          color: white;
          cursor: pointer;
        }

        .delete-button:hover {
          background-color: #d32f2f;
        }

        .edit-button {
          padding: 4px 8px;
          font-size: 14px;
          border-radius: 4px;
          border: none;
          background-color: #2196f3;
          color: white;
          cursor: pointer;
        }

        .edit-button:hover {
          background-color: #1976d2;
        }
      </style>
      </head>
      <body>
        <h1>Tabla de productos</h1>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
        ${table.innerHTML}
        </tbody>
        </table>
      </body>
      </html>
    `);
    win.document.close();
  
    // Restaurar la visualización de las columnas "Editar" y "Eliminar"
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      cells[3].style.display = ''; // Restaurar celda "Editar"
      cells[4].style.display = ''; // Restaurar celda "Eliminar"
    }
  
    // Esperar a que la ventana emergente termine de cargar los estilos
    win.onload = function() {
      win.print(); // Imprimir la ventana emergente
      win.close(); // Cerrar la ventana emergente después de imprimir
    };
  }

*/
function generarPDF2() {
  const tabla = document.querySelector('table');
  const thtabla = tabla.querySelector('thead tr');

  const headerNames = Array.from(thtabla.children).map(th => th.textContent);

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headerRow = document.createElement('tr');

  headerNames.forEach(name => {
    if(name != "Editar" && name != "Eliminar"){
      const th = document.createElement('th');
      th.textContent = name;
      headerRow.appendChild(th);
    }
  });
  
  thead.appendChild(headerRow);
  
  table.appendChild(thead);
  table.appendChild(tbody);
  
  datosfiltrados.forEach(obj => {
    const newRow = tbody.insertRow();
    for (const dato in obj) {
      const newCell = newRow.insertCell();
      newCell.textContent = obj[dato];
    }
  });
    
    
    // Crear una ventana emergente para imprimir
    const win = window.open('', '_blank');
    win.document.write(`
      <html>
      <head>
        <title>PDF</title>
        <style>
        /* Estilos generales */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        /* Estilos de la tabla */
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        th, td {
          padding: 8px;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #f2f2f2;
          text-align: left;
          font-weight: bold;
        }

        /* Estilos de los botones de la tabla */
        .delete-button {
          padding: 4px 8px;
          font-size: 14px;
          border-radius: 4px;
          border: none;
          background-color: #f44336;
          color: white;
          cursor: pointer;
        }

        .delete-button:hover {
          background-color: #d32f2f;
        }

        .edit-button {
          padding: 4px 8px;
          font-size: 14px;
          border-radius: 4px;
          border: none;
          background-color: #2196f3;
          color: white;
          cursor: pointer;
        }

        .edit-button:hover {
          background-color: #1976d2;
        }
      </style>
      </head>
      <body>
        <h1>Tabla de productos</h1>
       
   
        ${table.outerHTML}

      </body>
      </html>
    `);
    win.document.close();
        
    // Esperar a que la ventana emergente termine de cargar los estilos
    win.onload = function() {
      win.print(); // Imprimir la ventana emergente
      win.close(); // Cerrar la ventana emergente después de imprimir
    };
  }