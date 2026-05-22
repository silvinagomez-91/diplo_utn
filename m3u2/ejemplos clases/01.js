// console.log('hola curso!')
/*const: se usa para declarar variables cuyo valor no cambiará una vez asignado*/
const nombre = 'Silvina'; /*tipo texto o string*/

const edad = 35; /*tipo numerico*/

const casado = false;

console.log(casado)
console.log(`Mi nombre es: ${nombre} y tengo ${edad} años.`)

/*let: se usa para declarar variables que pueden cambiar su valor durante la ejecución del programa.*/
let contador = 0;
contador = contador + 1;

console.log(contador)


/*array*/
/*se usa corchetes cuando es mas de uno*/
const frutas = ['bananas','manzanas','frutillas','paltas']
console.log (frutas)

console.log (frutas [1]) /*manzanas porque el contador empieza en 0. por lo tanto banana es el 0 y manzana el 1. y asi*/


/*object*/
let auto = {
    marca: 'palio',
    modelo:'fiat'
}

console.log(auto) /*asi muestra todo el contenido*/
console.log(auto.modelo) /*asi muestra solo lo que se pide*/

let texto = 'No por mucho madrugar amanece más temprano'
console.log (texto.length); /*esto es para contar caracteres*/
console.log(texto.toUpperCase()) /*esto es para hacerlo en mayuscula, es una funcion*/