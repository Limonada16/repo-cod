/**
 * Funciones y propiedades de los STRINGS
 */
let frase = "I become death, destroyer of worlds.";
console.log(frase);
//tamaño de un string
console.log(`Tamaño: ${frase.length}`);
console.log(frase[3]);
//Retorno de la frase en mayusculas
console.log(frase.toUpperCase());
//Retorna la frase en minuscula
console.log(frase.toLowerCase());
//obtener un arreglo de strings dado un separador
console.log(frase.split(" "));
//obtener la posicion en la que aparece un determinado caracter
//o una determinada cadena
console.log(frase.indexOf("bec"));

//TRIM -> eliminar espacios en la cadena
let correo = " alonsoconde20@gmail.com";
console.log(correo.trim());

//obtener la subcadena desde la posicion 5, dos caracteres adelante
console.log(frase.substr(5,2));

//Obtener la subcadena desde la posicion 5 hasta la psocion 6(No incluye la 7)
console.log(frase.substring(5,7));