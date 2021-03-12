/**
 * Retornar un nuevo arreglo de peliculas
 * donde cada objeto pelicula tendra un atributo adicional
 * llamado "genres" que será un arreglo que tenga la lista
 * de generos en string(los nombres)
 */
function agregarGneros() {
    let peliculasModificadas = peliculas.map((objPeli) => {
        let names = objPeli.genre_ids.map((idGenero) => {
            let objGeneroEncontrado = generos.find((objGenero) => {
                if (objGenero.id === idGenero) {
                    return objGenero;
                }
            })
            return objGeneroEncontrado.name;
        })
        objPeli.genres = names; 
        return objPeli;
    });
    console.log(peliculasModificadas);
}
//agregarGneros();

/**
 * Función que imprime un objeto genero cuyo id sea igual al parametro recibido
 * @param {*} idGenero 
 */
function getGeneroById(idGenero){
    let objgeneroEncontrado = generos.find((objGenero)=>{
        if(objGenero.id===idGenero){
            return objGenero;
        }
    });
    console.log(objgeneroEncontrado);
}
//getGeneroById(16);

/**
 * funcion que imprime la lista de generos dado un arreglo de ids (idsGeneros)
 * @param {*} idsGeneros
 */
function getGenerosById(idsGeneros = []){
    let encontrado = generos.map((listGenero)=>{
            let objGeneroEncontrado = generos.find((listGenero)=>{
                if(listGenero.id === listGenero){
                    return listGenero;
                }
            })
            console.log(objGeneroEncontrado);
    });
    console.log(encontrado);
}

getGeneroById([16,35,99])
