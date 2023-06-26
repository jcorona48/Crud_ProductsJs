
function cambiarPagina(pagina) {
    console.log("Cambiando a pagina " + pagina);
    paginaActual = pagina;
    Paginar(datosfiltrados);
}

function LimpiarTabla() {
    const tabla = document.getElementById("Tabla");
    var rowCount = tabla.rows.length;

    // Eliminar filas de la tabla, comenzando desde la última hasta la primera
    for (var i = rowCount - 1; i >= 0; i--) {
        tabla.deleteRow(i);
    }
}

function Paginar(datos){
    LimpiarTabla();
    const inicio = (paginaActual - 1) * itemsxpag;
    const fin = inicio + itemsxpag;
    const datosPaginados = datos.slice(inicio, fin);
    
    datosPaginados.forEach(dato => {
        const claves = Object.keys(dato);
        const nuevafila = tabla.insertRow();
        const celdaID = nuevafila.insertCell();
        const celdaNombre = nuevafila.insertCell();
        const celdaPrecio = nuevafila.insertCell();
        const celdaEditar = nuevafila.insertCell();
        const celdaEliminar = nuevafila.insertCell();
        
        celdaID.textContent = dato[claves[0]];
        celdaNombre.textContent = dato[claves[1]];
        let PrecioArreglado = parseFloat(dato[claves[2]]).toString()
        if(!PrecioArreglado.includes('.')){
            PrecioArreglado+= '.00'
        }
        celdaPrecio.textContent = PrecioArreglado;
        celdaEditar.innerHTML='<button onclick="editarRegistro(this)" type="button" class="edit-button">Editar</button>';
        celdaEliminar.innerHTML='<button onclick="eliminarRegistro(this)" type="button" class="delete-button">Eliminar</button>';
    });
    const totalPaginas = Math.ceil(datos.length / itemsxpag);
    generarPaginacion(totalPaginas, paginaActual);
    datosCargados = false;
}

function generarPaginacion(totalPaginas) {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";
    let list = document.createElement("li");
        list.classList.add("page-item");
    let link = document.createElement("a");
        link.classList.add("page-link");
        link.href = "#";
        link.textContent = "Anterior";
        link.addEventListener("click", () => {
            if(paginaActual != 1){
                cambiarPagina(paginaActual-1);
            }
        });
    list.appendChild(link);
    paginationContainer.appendChild(list);

    list = document.createElement("li");
    list.classList.add("page-item");
    link = document.createElement("input");
    link.classList.add("page-link");
    link.id = "CurrentPag";
    link.value = paginaActual;
    link.type = "text";
    link.addEventListener("keydown", (e) => {
        if(e.keyCode === 13 && parseInt(e.target.value) >= 1 && e.target.value != paginaActual && parseInt(e.target.value) <= totalPaginas ){
            cambiarPagina(parseInt(e.target.value));
        }
    });
    list.appendChild(link);
    paginationContainer.appendChild(list);
    
    list = document.createElement("li");
    list.classList.add("page-item");
    link = document.createElement("p");
    link.classList.add("page-link");
    link.textContent = ": "+totalPaginas;
    list.appendChild(link);
    paginationContainer.appendChild(list);
    // paginationContainer.innerHTML += '<li class="page-item"><p class="page-link"> : ' + totalPaginas + '</p></li>';
    /*for (let i = 1; i <= totalPaginas; i++) {
            const list = document.createElement("li");
            list.classList.add("page-item");
            if (i === paginaActual) {
                list.classList.add("active");
                }
            const link = document.createElement("a");
            link.classList.add("page-link");
            link.href = "#";
            link.textContent = i;
            
            link.addEventListener("click", () => {
                cambiarPagina(i);
            });

            console.log(link);
            console.log(list);

            list.appendChild(link);
            paginationContainer.appendChild(list);
            
        }*/
        list = document.createElement("li");
        list.classList.add("page-item");
        link = document.createElement("a");
        link.classList.add("page-link");
        link.href = "#";
        link.textContent = "Siguiente";
        link.addEventListener("click", () => {
            if(paginaActual != totalPaginas){
                cambiarPagina(paginaActual+1);
            }
        });
    list.appendChild(link);
    paginationContainer.appendChild(list);
        
}



