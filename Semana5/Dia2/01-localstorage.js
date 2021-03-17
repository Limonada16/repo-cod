const fomulario = document.getElementById("fomulario");
const inputColor = document.getElementById("inputColor");
const btnGuardar = document.getElementById("btnGuardar");
const body = document.querySelector("body");
fomulario.onsubmit = (e) =>{
    e.preventDefault(); //evitar el bug del formulario
    let color = inputColor.value;
    body.style.backgroundColor = color;
    //Guardar datos en el localStorage
    //el localstorage sólo guarda Strings
    //setItem("clave", "valor");
    localStorage.setItem("fondo", color);
}
(()=>{
    if(localStorage.getItem("fondo")){
        body.style.backgroundColor = localStorage.getItem("fondo");
        inputColor.value = localStorage.getItem("fondo");
    }
})()

document.querySelector("#btnBorrar").onclick = (e) =>{
    localStorage.removeItem("fondo");
    body.style.backgroundColor = "#333";
    inputColor.value = "#000"
}