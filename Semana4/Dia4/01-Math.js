//la clase math es una clase estatica


//Obetener un numero aleatorio entre 50 y 170
let aleatorio = Math.random()*(170-50)+50;
console.log(aleatorio);

//Redondear un numero
console.log(Math.round(aleatorio));

//techo de un numero
/**
 * Si el numero es 3.1 entonces el techo es 4
 * Si el numero es 9.0002 entonces el techo es 10
 */
console.log(Math.ceil(aleatorio));

//Piso de un numero
/**
 * Si el numero es:
 * 7.99 => el piso es 7
 * 50.89 => el piso es 50 
 */
 console.log(Math.floor(aleatorio));
 

 //Raiz cuadrada de un numero
 console.log(Math.sqrt(81));
