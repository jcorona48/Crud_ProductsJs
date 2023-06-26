

function Ordenar() {
    const sortableHeaders = document.querySelectorAll('th.sortable');
    sortableHeaders.forEach(header => {
        console.log("Ordenaste cuando agregaste alguna info.")
        if(header.classList.contains('asc') || header.classList.contains('desc')){
            if(!header.classList.contains('asc')){
// Si la dirección actual es ascendente, cambiar a descendente
                    const sortfor = parseInt(header.getAttribute('data-value'))
                    datosfiltrados.sort((a , b) =>{
                        const claveA = Object.keys(a);
                        const claveB = Object.keys(b);
                        const valorA = a[claveA[sortfor]].toString().toLowerCase()
                        const valorB = b[claveB[sortfor]].toString().toLowerCase()
        
                        if(!isNaN(parseFloat(valorA)) && valorA.includes(".")){
                            if(parseFloat(valorA)  > parseFloat(valorB) ){
                                return -1;
                            }
            
                            if(parseFloat(valorA)  < parseFloat(valorB) ){
                                return 1;
                            }
        
                            return 0;
                        }
        
                        if(valorA > valorB ){
                            return -1;
                        }
        
                        if(valorA < valorB ){
                            return 1;
                        }
                        
                        return 0;
                    });
    
                  } else {
                    // Si la dirección actual es descendente o no está clasificada, cambiar a ascendente
                    const sortfor = parseInt(header.getAttribute('data-value'))
                    datosfiltrados.sort((a , b) =>{
                        const claveA = Object.keys(a);
                        const claveB = Object.keys(b);
                        const valorA = a[claveA[sortfor]].toString().toLowerCase()
                        const valorB = b[claveB[sortfor]].toString().toLowerCase()
        
                        if(!isNaN(parseFloat(valorA)) && valorA.includes(".")){
                            if(parseFloat(valorA)  < parseFloat(valorB) ){
                                return -1;
                            }
            
                            if(parseFloat(valorA)  > parseFloat(valorB) ){
                                return 1;
                            }
        
                            return 0;
                        }
        
                        if(valorA < valorB ){
                            return -1;
                        }
        
                        if(valorA > valorB ){
                            return 1;
                        }
                        
                        return 0;
                    });
        }
        }
});
}

const sortableHeaders = document.querySelectorAll('th.sortable');
    // Agregar el evento clic a cada encabezado de columna clasificable
    sortableHeaders.forEach(header => {
        header.addEventListener('click', () => {
                if(datosfiltrados.length == datosfiltrados.length){
                    sortableHeaders.forEach(heade => {
                        if(header != heade){
                            heade.classList.remove('asc', 'desc');
                        }
                    
                  });
                  if (header.classList.contains('asc')) {
                    // Si la dirección actual es ascendente, cambiar a descendente
                    header.classList.remove('asc');
                    header.classList.add('desc');
                    const sortfor = parseInt(header.getAttribute('data-value'))
                    datosfiltrados.sort((a , b) =>{
                        const claveA = Object.keys(a);
                        const claveB = Object.keys(b);
                        const valorA = a[claveA[sortfor]].toString().toLowerCase()
                        const valorB = b[claveB[sortfor]].toString().toLowerCase()
        
                        if(!isNaN(parseFloat(valorA)) && valorA.includes(".")){
                            if(parseFloat(valorA)  > parseFloat(valorB) ){
                                return -1;
                            }
            
                            if(parseFloat(valorA)  < parseFloat(valorB) ){
                                return 1;
                            }
        
                            return 0;
                        }
        
                        if(valorA > valorB ){
                            return -1;
                        }
        
                        if(valorA < valorB ){
                            return 1;
                        }
                        
                        return 0;
                    });
                    Paginar(datosfiltrados);
    
                  } else {
                    // Si la dirección actual es descendente o no está clasificada, cambiar a ascendente
                    header.classList.remove('desc');
                    header.classList.add('asc');
                    const sortfor = parseInt(header.getAttribute('data-value'))
                    datosfiltrados.sort((a , b) =>{
                        const claveA = Object.keys(a);
                        const claveB = Object.keys(b);
                        const valorA = a[claveA[sortfor]].toString().toLowerCase()
                        const valorB = b[claveB[sortfor]].toString().toLowerCase()
        
                        if(!isNaN(parseFloat(valorA)) && valorA.includes(".")){
                            if(parseFloat(valorA)  < parseFloat(valorB) ){
                                return -1;
                            }
            
                            if(parseFloat(valorA)  > parseFloat(valorB) ){
                                return 1;
                            }
        
                            return 0;
                        }
        
                        if(valorA < valorB ){
                            return -1;
                        }
        
                        if(valorA > valorB ){
                            return 1;
                        }
                        
                        return 0;
                    });
                    Paginar(datosfiltrados);
                  }
    
    
                }
                
            });
            
    });

    