let registrov = [];
function obtenerDatos(){
    let nombre = document.getElementById("nombre").value;
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let nviajeros = document.getElementById("nviajeros").value;
    let fecha = document.getElementById("fecha").value;

    let registro ={
        "nombre": nombre,
        "origen": origen.toUpperCase(),
        "destino": destino.toUpperCase(),
        "nviajeros": nviajeros,
        "fecha": fecha
    }

    registrov.push(registro);

    // for(let valor of registrov){
    //     console.log(valor.nombre);
    //     console.log(valor.origen);

    // }
}

function mostrarRegistros(){
    for(let valor of registrov){
        if( valor.destino == "CANARIAS" || valor.destino == "MALLORCA" || valor.destino == "GALICIA"){
            console.log(valor.nombre);
            console.log(valor.origen);
            console.log(valor.destino);
            console.log(valor.nviajeros);
            console.log(valor.fecha);
        }

    }

   

    let myId = document.getElementById("lista");
    myId.innerHTML ="";
    for(let valor of registrov){
        if( valor.destino == "CANARIAS" || valor.destino == "MALLORCA" || valor.destino == "GALICIA"){
            myId.innerHTML += `<li>Nombre: 
                                ${valor.nombre}
                                , Destino: ${valor.destino}, Numero Viajeros: ${valor.nviajeros} </li>` 
    
        }

    }


}
