    datosfiltrados = []
    datosNofiltrados = []

async function obtenerDatosApi() {
        const respuesta = await fetch("http://localhost:5000/api/Productos/");
        const datos = await respuesta.json();
        console.log(datos)
        datosNofiltrados = datos;
        datosfiltrados= datos;
    }


async function CargarDatos() {
    await obtenerDatosApi();
    Paginar(datosNofiltrados);
}


async function EnviarApi() {
    const Nombre = document.getElementById("Nombre");
    const Precio = document.getElementById("Precio");
  
    let result = 0;
    const obj = {
        nombre: Nombre.value,
        precio: parseFloat(Precio.value) 
    };

    const url = "http://localhost:5000/api/Productos/";

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    };

    try{
        const response = await fetch(url, options);
        result = await response.json();
        console.log(result);
        return result;
    }catch(error){
        console.error('Error: ', error)
    }
    return result;

}

async function EliminarApi(ID) {
    const obj = {
        id: ID
    }
    const url = "http://localhost:5000/api/Productos/"+ID;
    const options = {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(obj),
        }
    };

    try{
        const response = await fetch(url, options);
    }catch(error){
        console.error('Error: ', error)
    }

}

async function ActualizarApi() {
    const ID = document.getElementById("ID");
    const Nombre = document.getElementById("Nombre");
    const Precio = document.getElementById("Precio");
    if(!Precio.value.includes('.')){
        Precio.value+='.00'
    }
    let result = 0;
    const obj = {
        nombre: Nombre.value,
        precio: parseFloat(Precio.value) 
    };

    const url = "http://localhost:5000/api/Productos/"+ ID.value;

    const options = {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    };

    try{
        const response = await fetch(url, options);
        result = await response.json();
        console.log(result);
        return result;
    }catch(error){
        console.error('Error: ', error)
    }
    return result;

}