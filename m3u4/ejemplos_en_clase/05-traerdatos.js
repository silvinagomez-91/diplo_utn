//funcion asincrónica. no se cuando voy a llamar esos datos

async function traerDatos(){
    try{
        let respuesta = await fetch("https://rickandmortyapi.com/api/character");
        let datos = await respuesta.json();
        console.log(datos)

    }catch (error){
        console.log(error)
    }
}

traerDatos()