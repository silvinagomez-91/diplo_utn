const texto = document.getElementById('texto');
const contar = document.getElementById('contar');

//keyup significa cuando suelto la tecla
texto.addEventListener('keyup', function(){

    contar.innerText = texto.value.length
})