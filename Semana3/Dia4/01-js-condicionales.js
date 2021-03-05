/*Ejercicio1*/
/*let costoPrenda = 5_000;
let nombrePrenda = "Cartera Gucci";
let creditcardCash = 4_999; 
if(creditcardCash>=costoPrenda){
    creditcardCash -= costoPrenda;
    console.log(`Compraste la prenda: ${nombrePrenda} tu saldo restante es de ${creditcardCash}` );

}else{
    console.log(`Su saldo es insuficiente`);
}
console.log(`Hasta pronto`);*/

/*Ejercicio 2*/
/*Si el producto tiene un costo mayor o igual 
a 500 soles y es jueves: se debe descontar un
15%, si es domingo se descuenta un 10%,
si es otro dia no hay descuento.
Sino tampoco hay descuento
 */
/*
debugger;
 let dias = prompt("Ingrese el dia de hoy")
 let producto = 600;
 if(producto>=500){
    if(dias === "Jueves"|| dias==="jueves"){
        console.log(`Total a pagar: ${producto * 0.85}`);
    }else if(dia==="domingo"||dia==="Domingo"){
        console.log(`Total a pagar: ${producto * 0.9}`);
    }else{
        console.log(`Total a pagar ${producto}`);
    }   
 }else{
     console.log(`Total a pagar: ${producto}`);
 }
*/

/*Ejercicio3(Mejorando ele ejercicio 2) */
/*
let dias = prompt("Ingrese el dia de hoy")
let producto = 600;
if(producto>=500 && dias === "Jueves"){
    console.log(`Total a pagar: ${producto * 0.85}`);
}else if(producto>=500 && dias === "Domingo"){
    console.log(`Total a pagar: ${producto * 0.9}`);
}else{
    console.log(`Total a pagar: ${producto}`);
}
*/

/*Ejercicio4 
Descuento del 5% bajo 2 condiciones 
el producto debe superar los 1000 soles
el dia debe ser lunes*/
/*
let dia = "Jueves";
let precio = 1001;
if(precio >= 1000 || dia ==="Lunes"){
    precio = 900 * 0.5;
    console.log(`El precio total es ${precio}`);
}
*/
/*Comparadores aritmeticos son:
< menor que
> mayor que
<= menor o igual que
>= mayor o igual que
=== igual que
== igual en valor que
!== diferente que
 */
/*
let mayo = 0;
let num1 = prompt("Ingrese el numero 1");
let num2 = prompt("Ingrese el numero 2");
let num3 = prompt("Ingrese el numero 3");
if(num1>num2){
    if(num1>num3){
        mayo = num1;
        
    }else{
        mayo = num3;
       
    }

    
}else{
    if(num2>num3){
        mayo = num2;
        
    }
    else{
        mayo = num3;
        
    }
}
console.log(`El mayor es: ${mayo}`);
*/
/*
let NA = prompt("Ingrese El numero de alumnos: ");
let pagoAlumno = 0;
if(NA>=100){
    pagoAlumno = 65
}else{
    if(NA>=50 && NA<=99){
        pagoAlumno = 70;
    }
    else{
        if(NA>=30 && NA<=49){
            pagoAlumno = 95;
        }
        else{
            if(NA<30){
                Total = 4000;
            }
        }
    }
}
let total = pagoAlumno * NA;
console.info(`El pago individual es: ${pagoAlumno}`);
console.info(`El pago total es: ${total}`);
/*Scope  
Ingresar cantidad de horas trabajadas 
ingresar precio por horas
resultados: 
    Si la cantidad de horas es mayor o igual a 35, el exceso
    se debe de pagar el doble del salario normal por hora
    
   
    */

    /*
   let precioxHora = 50;
   let horasTrabajadas = 40;
   if(horasTrabajadas >= 35){
       let pagoTotal = 35 * precioxHora + ((horasTrabajadas - 35) * 2 * precioxHora);
       console.log(`Pago Total = ${pagoTotal}`);
   }else{
       pagoTotal = horasTrabajadas * precioxHora;  
   }
   console.log(`Pago total = ${pagoTotal}`);
   
/***/
let hora = prompt("Ingrese el numero de horas");
let precioxhora = 0;
if(hora<=2){
    precioxhora = 5;
}else{
    if(hora)
}
