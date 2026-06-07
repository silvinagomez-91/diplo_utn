const novedad = {
    titulo: "¡Nuevo producto disponible!",
    subtitulo: "Conoce las inscreíbles características de nuestro último lanzamiento",
    cuerpo:"Estamos emocionados de anunciar el lanzamiento de nuestro nuevo dispositivo inteligente, diseñado para facilitar tu día a día."
};
console.log(novedad)
console.log(novedad.cuerpo)

//destructuracion de objeto novedad

const { titulo, subtitulo, cuerpo } = novedad 
//signidica que lo que pongo en corchetes pertenece a lo que va despues del igual.

console.log(subtitulo)