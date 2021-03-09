function buscarPorDni(){
    let rpta = "Alonso Conde Sánchez";
    setTimeout(function(){
        console.log("Ya pasarpm 2 segundos");
    }, 2000);
    return rpta;
}
let encontrado = buscarPorDni("71791966");
console.log(encontrado);