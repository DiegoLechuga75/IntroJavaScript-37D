let respuestaUsuario1 = prompt("Dame un color").toUpperCase();
let respuestaUsuario2 = prompt("Ahora dame otro color").toUpperCase();


while(respuestaUsuario1 === "" || respuestaUsuario2 === ""){
    respuestaUsuario1 = prompt("Dame un color").toUpperCase();
    respuestaUsuario2 = prompt("Ahora dame otro color").toUpperCase();
    if(respuestaUsuario1 === respuestaUsuario2){
        console.log("Tus colores son igules")
    } else {
        console.log("Tus colores son diferentes")
    }
}

console.log("Terminó el ciclo");
