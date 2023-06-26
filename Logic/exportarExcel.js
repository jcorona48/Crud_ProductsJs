function generarExcel() {
    const tabla = document.querySelector('table');
    const thtabla = tabla.querySelector('thead tr');
    const headerNames = Array.from(thtabla.children).map(th => th.textContent);

    const data = [headerNames.filter(name => name != "Editar" && name != "Eliminar")];
    
    datosfiltrados.forEach(obj => {
      const row = [];
      for (const dato in obj) {
          row.push(obj[dato]);
      }
      data.push(row);
    });
  
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
  
    const fileName = 'datos.xlsx';
  
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      // Para IE y Edge
      window.navigator.msSaveBlob(blob, fileName);
    } else {
      // Para otros navegadores
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }