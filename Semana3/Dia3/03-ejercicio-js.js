/**
 *  Pagina 44: ejercicio 2.6
 */
/* Dato: Anteponer el signo + antes de un string(en forma
    de numero), convierte este numero en un numero entero o decimal */
let catetoA = +prompt("Ingrese el cateto A");
let catetoB = +prompt("Ingrese el cateto B");
let hipotenusa;
hipotenusa = ((catetoA**2) + (catetoB**2))**0.5;
console.log(`La hipotenusa es: ${hipotenusa}`)

/*
 */