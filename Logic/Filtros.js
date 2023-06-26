
function RellenarCbxFiltro() {
    const cbxfilter = document.getElementById("cbxfiltro");
    const ths = document.getElementsByTagName("th");
    let cont = 0;

    const option = document.createElement("option");
    option.value = "Todos";
    option.innerHTML = "Todos";

    cbxfilter.appendChild(option);

    for(th of ths){
        const contenido = th.innerHTML
        if(contenido != "Editar" && contenido != "Eliminar"){
            const option = document.createElement("option");
            option.value = cont;
            option.innerHTML = contenido;
        
            cbxfilter.appendChild(option);
            cont++;
        }
    }
}

function Filtros() {
    const txtfiltro = document.getElementById("txtfiltro");
    const cbxfiltro = document.getElementById("cbxfiltro");

txtfiltro.addEventListener("input", () => {
    
    FiltrarBien();
    //Filtrar();
});

cbxfiltro.addEventListener("change", () => {
        // Filtrar();
    FiltrarBien();
});
}


function FiltrarBien() {
    const textfiltro = document.getElementById("txtfiltro").value;
    const filtro = document.getElementById("cbxfiltro");
    datosfiltrados = []
    if(filtro.value == "Todos"){
        datosNofiltrados.forEach(dato => {
            const clave = Object.keys(dato);
            const id = dato[clave[0]].toString().toUpperCase()
            const name = dato[clave[1]].toUpperCase()
            const precio = dato[clave[2]].toString().toUpperCase()

            if( id.includes(textfiltro.toUpperCase()) || name.includes(textfiltro.toUpperCase()) ||  precio.includes(textfiltro.toUpperCase())){
                datosfiltrados.push(dato);
            }
        });
    }else{

        datosNofiltrados.forEach(dato => {
            const clave = Object.keys(dato);
            const valor = dato[clave[parseInt(filtro.value)]].toString().toUpperCase();
            if(valor.includes(textfiltro.toUpperCase())){
                datosfiltrados.push(dato);
            }

        });

    }
    Ordenar();
    generarPaginacion(datosfiltrados.length);
    cambiarPagina(1);
    Paginar(datosfiltrados);
}