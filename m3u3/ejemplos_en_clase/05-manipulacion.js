const titulo = document.querySelector('h1');
console.log(titulo)

//style
titulo.style.color = 'red'

//tambien se puede usar backgroundColor
//fontSize

//classList

titulo.classList.add('fondo')

const boton = document.getElementById('boton')

const texto = document.getElementById('texto')

boton.addEventListener('click', ()=>{
    texto.classList.toggle('invisible')
})
//la formas es ponerle display=none

//metodos de classList

// .add: agrega clases
// .remove : elimina clases
// .toggle: alterna la presencia de una clase
// .replace: reemplaza una clase por otra
// .lenght : devuelve el numero de clases en el elemento


const aclaracion = document.getElementById('aclaracion')
aclaracion.innerHTML = "<h1> Este es un nuevo texto </h1>"
// aclaracion.innerText = "Este es un nuevo texto"

