let mayor = 0
let numeros = [10, 50, 8, 130, 25, 32]

for (let i=0; i< numeros.length; i ++){
if(numeros[i] > mayor){
   mayor = numeros[i]
}
   }

console.log(`El mayor es ${mayor}`)

