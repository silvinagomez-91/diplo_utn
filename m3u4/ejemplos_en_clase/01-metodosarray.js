const numeros = [1, 3, 5, 7, 9];
console.log(numeros)

const dobles = numeros.map(num => num * 2)
console.log(dobles)

const mayores = numeros.filter(num => num > 4)
console.log(mayores)

// esto => es funcion flecha

const encontrar = numeros.find(num => num > 1)
console.log(encontrar)

//la diferencia entre filter y find es que find imprime el primero que encuentra, no todos como filter.