let mascotaPerdida = {
    raza: "Bull Terrier",
    colores: ["negro","blanco","cafe"],
    encontradoEn: "Av. Arequipa",
    alturaMetros: 0.5,
    edad: 1.5,
    nroContacto: "982388953",
    genero: "macho"
}

console.log(`Raza: ${mascotaPerdida.raza}`);
console.log(`Altura aproximada: ${mascotaPerdida["alturaMetros"]} metros`);

for(const color of mascotaPerdida.colores){
    console.log(color);
}


let chancho = mascotaPerdida;
let kyra = {...mascotaPerdida};
kyra.colores = ["Blanco"];
console.log(kyra);
console.log(mascotaPerdida);



chancho.edadAporx = 0.5;
chancho.colores = ["Blanco","Negro"];
console.log(chancho);
console.log(mascotaPerdida);
console.log("----------------------------------------------------------------------");
const MascotaConstructor = function (_raza, _colores,_encontradoEn,_alturaMetros,
                                    _edadAprox, _nroContacto, _genero){
    let mascotaPerdida = {
        raza: _raza|| "",
        colores:_colores|| [],
        encontradoEn: _encontradoEn|| "",
        alturaMetros: _alturaMetros|| 0,
        edad: _edadAprox|| 0,
        nroContacto: _nroContacto|| "",
        genero: _genero || ""
    }
    return mascotaPerdida;
}

/*

const MascotaContructor = function (){
    let mascotaPerdida = {
        raza: "Bull Terrier",
        colores: ["negro","blanco","cafe"],
        encontradoEn: "Av. Arequipa",
        alturaMetros: 0.5,
        edad: 1.5,
        nroContacto: "982388953",
        genero: "macho"
    }
    return mascotaPerdida;
}*/
let fido = MascotaContructor();
let sasha = MascotaContructor();
console.log(fido);
console.log(sasha);
fido.raza = "Pitbull";
fido.alturaMetros = 0.3;
sasha.genero = "Hembra";
sasha.raza = "Puddle";
console.log(fido);
console.log(sasha);