const palabras = ["Manzana","Barrilete","Peras","Papa","Mama","Corazones","Estudiante","Burro","Vaca","Hijo","Harry Potter",
"Gato con botas","La sirenita"];
let vidas =7;
var palabra="";
var palabraMostrar ="";
function generarPalabra(){
    let indiceArray = (Math.random()*10);
    if(indiceArray>= palabras.length){
        generarPalabra();
    }else{
        palabra = palabras[parseInt(indiceArray)].toUpperCase(); 
    }
}

function mostrarPalabra(){
    mostrarPalabra = document.getElementById("txtMostrarPalabra");
    generarPalabra();
    mostrarPalabra.value = palabra;
}