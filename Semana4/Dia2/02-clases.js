function Ingrediente(_nombre, _cantidad, _unidadDeMedida){
    this.nombre = _nombre || "";
    this.cantidad = _cantidad || 0;
    this.unidadDeMedida = _unidadDeMedida || "";
}
function Receta(){
    this.nombre = "";
    //un ingrediente tiene la estructura de la clase ingrediente,
    this.ingredientes = [];
    this.tiempo = 0;
    this.tipo = "";
    this.info = function(){
        console.log(`El plato ${this.nombre} es un plato ${this.tipo} y su tiempo de preparacion es de ${this.tiempo} horas.`);
    }
}
let cebiche = new Receta();
cebiche.nombre = "Cebiches";
cebiche.tipo  = "Marino";
cebiche.tiempo =1;
cebiche.ingredientes.push(new Ingrediente("Pescado",1,"Kilogramos"));
cebiche.ingredientes.push(new Ingrediente("Cebolla",2,"Cabezas"));

console.log(cebiche);
cebiche.info();

let chaufaDePollo = new Receta();
chaufaDePollo.nombre = "Chaufa de pollo";
chaufaDePollo.tipo  = "Oriental";
chaufaDePollo.tiempo = 1.2;


console.log(chaufaDePollo);
chaufaDePollo.info();