let score = parseInt(prompt("Ingrese el puntaje del cliente"));

if(score < 150 && score > -1) {
    console.log("Standard");
} else if(score >= 150 && score < 300){
    console.log("Gold");
} else if(score >= 300){
    console.log("Platinum");   
} else {
    console.log("Ingresa un número positivo");
}
