/**
 * Funcion que recibe un id de pelicula e imprime 
 * la lista de generos (nombre de los generos) que
 * pertenecen a esta pelicula
 * @param {number} peliId 
 */
const mostrarGenerosByPeliId = (peliId) => {
    
    //1. Buscar la pélicula que tenga el id solicitado
    let peliEncontrada;
    for (const peli of peliculas) {
        if(peliId === peli.id){
            peliEncontrada = peli;
        }
    }
    //2. Reccorer el arreglo de ids, en cada iteración 
    //recorrer el arreglo de generos para comparar si
    //encontramos o no es id
    for (const generoId of peliEncontrada.genre_ids) {
        for (const gen of generos) {
            if(generoId === gen.id){
                console.log(gen.name);
            }
        }
    } 
    
    
}
//mostrarGenerosByPeliId(464052);
/**
 * Dado el nombre de un gneero, imprimir todas las peliculas que 
 * tengan al menos, ese genero
 * @param {string} nombreGenero 
 */
const mostrarPelisByGeneroName = (nombreGenero) =>{
    let nombreGen;
    for (const gene of generos) {
        if(nombreGenero === gene.name){
            nombreGen = gene.id;
        }
    }
    for (const nombre of peliculas) {
        for (const idGen of nombre.genre_ids) {
            if(nombreGen===idGen){
                console.log(nombre.original_title);
            }
        }   
    }
    
}
//mostrarPelisByGeneroName("Action");

/**
 * Funcion que imprime la lista de peliculas con un promedio de calificaciones
 * entre 7 y 10 puntos
 */

const peliculasRecomendadas = () =>{
    for (const reco of peliculas) {
        if(reco.vote_average>=7 && reco.vote_average<=10){
            console.log(reco.original_title);
        }
    }
}
peliculasRecomendadas();