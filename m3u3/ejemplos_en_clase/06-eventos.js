const contenedor = document.querySelector('.contenedor') //aca si va el punto, cuando es className no.

const boton = document.getElementById('btn')

//addEventListener es cuando reciba algo, es decir, cuando lo haga como es el caso del mouse arriba o del click por ejemplo.
contenedor.addEventListener('mouseover', function(){
    contenedor.style.backgroundColor = 'blue'
})

contenedor.addEventListener('mouseout', function(){
    contenedor.style.backgroundColor = 'red'
})

boton.addEventListener('click', function(){
    if(contenedor.style.display == ""){
        contenedor.style.display = "none"
    } else {
        contenedor.style.display = ""
    }
})
//las comillas vacias significa que no tiene nada asignado para hacer, se queda como esta. y el "none" significa que no existe digamos como que no hay nada, desaparece.