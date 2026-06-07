//Estructura de datos

/*
objeto [
   {
    propiedad:valor,
    propiedad:valor,
    propiedad:valor,
   },
]
*/

const persona = {
    nombre: 'Silvina',
    apellido: 'Gomez',
    edad: 35,
    direccion:{
        calle: 'Leguizamon 1022',
        barrio: 'Villa Escobar'
    },
    hobbies: ['cantar', 'bailar', 'leer']
}

console.log(persona)
console.log(persona.apellido)
console.log(`Mi nombre es: ${persona.nombre} y mi apellido es: ${persona.apellido}` )