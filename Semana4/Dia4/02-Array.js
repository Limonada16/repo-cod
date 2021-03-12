//api de la clase Array
let edades = [15,12,20,40,65,10,5,22];
//arreglo.forEach((elemento,index)=>{})
edades.forEach((x, i) => {
    console.log(x + " " + i);
    if(x===40){
        console.log("asdasd");
    }
});

//arreglo.map((elemento, index)=>{})
/**
 * 1. La funciuon map itera todos los elementos
 * 2. Retorna un nuevo arreglo con la posibilidad de transformar a cada
 * lemento del arreglo
 * 3. Retorna necesariamente el 100% de los elementos
 */
let nuevasEdades = edades.map((ele, i)=>{
    //Supongamos que queremos obtener un nuevo arreglo
    //a las edades pares con el doble de su valor y los impares
    //con el mismo valor
    if(ele%2===0){
        return ele *2;
    }
});
console.log(nuevasEdades);

console.log("*************ProbandoFuncionFilter*************");
/**
 * Arrelo.filder((elemento,i)=>{})
 * filtra los elementos en cada iteración y retorna un nuevo arreglo con los elementos que 
 * unicamente han sido filtrados.
 * OJO: EL FILTRO DEBE SER CONDICIONAL
 * OJO: SI NINGUN ELEMENTO PASA EL FILTRO, DE TODOS MODOS SE RETORNA
 * un arreglo vacio
 * OJO: A CADA ELEMENTO RETORNADO NO SE PUEDE MODIFICAR EL VALOR, SOLO RETORNA EL ELEMENTO COMO TAL
 */
let mayoresDeEdad = edades.filter((ele, i)=>{
    if(ele >= 17){
        return ele;
    }
})
console.log(mayoresDeEdad);

/**
 * arreglo.find((ele, i)=>{})
 * Itera los elementos de un array hasta la condicion interna se cumpla
 * cuando esto sucede, se retorna el elemento que haya complido con la 
 * condición.
 * OJO: se retorna el primer elemento que cumpla con la condicion(UNO SOLO)
 * FIND A DIFERENCIA DE FILTER DEBE SER USADO PARA ENCONTRAR UN ELEMENTO UNICO
 * OJO: CUANDO EL ELEMENTO NO ES ENCONTRADO SE RETORNA UN UNDEFINE
 * SI el elemento es encontrado, no puede ser modificado cuando es retornado
 * Se retorna el elemento tal cual 
 */
let encontrado = edades.find((ele, i)=>{
    if(ele===65){
        return ele;
    }
})
console.log(encontrado);

/**
 * array.reduce((acumulador, ele)=>{})
 * REDUCE => se usa para sacar la sumatoria de numeros en un array
 */
let sumatotal = edades.reduce((sumatoria, ele)=>{
    return sumatoria + ele;
},0);
console.log(sumatotal);