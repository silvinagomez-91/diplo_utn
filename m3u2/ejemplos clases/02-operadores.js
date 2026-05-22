/*operadores de comparacion*/

/*

==        (igualdad) /*un solo igual es para dar valor. dos iguales es para igualar
!=        (diferente)  
>         (mayor)
<         (menor) 
>=        (mayor o igual que)
<=        (menor a igual que)

*/

/*operadores logico*/

// &&      (and)
// ||      (OR)

const a = 10;
const b = 20;
const c= "10";

a == b; /*false*/

a === b; /*false*/ /*esta es si es igual igual, en tipo también. en este caso es igual en tipo porque es numerico pero no es igual en numero*/

a != b ; /*true*/

a !== c ; /*true*/ /*significa diferente tanto en tipo como en valor*/

a > b; //false

b < a; //false 

a == b && a === c; //false //se tienen que dar las dos condiciones
a != b || a === c; //true  //se tiene que dar o una o la otra