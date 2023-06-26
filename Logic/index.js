if(!localStorage.getItem("User")){
    window.location.href = "./login.html";
}
const ID = document.getElementById("ID");
const Nombre = document.getElementById("Nombre");
const Precio = document.getElementById("Precio");
const tabla = document.getElementById("Tabla");
const txtfiltro = document.getElementById("txtfiltro");

RellenarCbxFiltro();

Filtros();

localStorage.setItem("URL", window.location.href);

edicion = false;
celdasFila = [];
let paginaActual = 1;
let itemsxpag= 10;
indiceEdicion = -1;
CargarDatos();
function CerrarSesion() {
    localStorage.removeItem("User");
    localStorage.removeItem("Pass");
    window.location.href = "./login.html";
}



async function Registrar() {
    const obj = await EnviarApi();
    console.log("Imprimir sin agregar nuevo objeto.")
    console.log(datosNofiltrados);
    datosNofiltrados.push(obj);
    console.log("Imprimir agregando nuevo objeto.")
    console.log(datosNofiltrados);
    FiltrarBien();
    Limpiar();
}

function Limpiar() {
    ID.value = "";
    Nombre.value = "";
    Precio.value = "";
    edicion = false;
    indiceEdicion = -1;
}
function Guardar() {
    
    console.log(edicion);
    if(!edicion){
        Registrar();
    }else{
        Actualizar();
    }

}

async function Actualizar() {
    const obj = await ActualizarApi();
    const claves = Object.keys(datosNofiltrados[indiceEdicion]);
    datosNofiltrados[indiceEdicion][claves[0]] = obj.ID_Producto;
    datosNofiltrados[indiceEdicion][claves[1]] = Nombre.value;
    datosNofiltrados[indiceEdicion][claves[2]] = Precio.value;
    FiltrarBien();
    Limpiar();
    
    
}

function editarRegistro(button) {
    let fila = button.parentNode.parentNode;
    let celdas = fila.cells;
    celdasFila = celdas;
    ID.value = celdas[0].textContent;
    indiceEdicion = datosNofiltrados.findIndex(function(objeto) {
        const claves = Object.keys(objeto);
        return objeto[claves[0]] == ID.value;
    });
    console.log("El objeto que seleccionaste esta en el indice. " + indiceEdicion)
    Nombre.value = celdas[1].textContent;
    Precio.value = celdas[2].textContent;
    edicion = true;
    console.log(edicion);

    // Puedes realizar acciones adicionales con los valores obtenidos
}



function eliminarRegistro(button) {
    let fila = button.parentNode.parentNode;
    let celdas = fila.cells;
    EliminarApi(celdas[0].textContent);
    tabla.deleteRow(fila.rowIndex - 1);
    
}