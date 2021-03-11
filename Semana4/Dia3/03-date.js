/**
 * Trabajamos con la clase date(manejamos fechas)
 */
let fechahoy = new Date();
console.log(fechahoy);

//mostrar el año de una fecha
console.log(fechahoy.getFullYear());

//mostrar el mes de una fecha
console.log(fechahoy.getMonth());

//mostrar el dia de una fecha
console.log(fechahoy.getDay());

let diaDeLaMadre2021 = new Date(2021, 4, 9);

//Cuando restamos fechas el resultado se muestra en milisegundos
//la unidad minima de tiempo en JavaScript

let milisegundo = diaDeLaMadre2021 - fechahoy
let segundo = milisegundo / 1000;
let minutos = segundo / 60;
let horas  = minutos / 60;
let dias = horas / 24;