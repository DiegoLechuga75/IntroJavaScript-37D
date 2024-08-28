function suma(num1,num2){
    return parseInt(num1) + parseInt(num2);
}

//console.log(suma("5","10"));

function saludo (nombre) {
    console.log('Holaaa ' + nombre);
}

//let nombre = prompt("Dime tu nombre");

//saludo(nombre);


//console.log(suma(5,8));


const sumaEnFlecha = (num1, num2) => parseInt(num1) + parseInt(num2);


const generadorDeMensajes = (nombre) => `Holaaa ${nombre}`;

const nocheODia = (hora) => {
    if(hora > 12){
        return "Es el horario de tarde/noche";
    } else {
        return "Es el horario de la madrugada/mañana";
    }
}

const oneLineNocheDia = (hora) => hora > 12 ? "Es el horario de tarde/noche" : "Es el horario de la madrugada/mañana";

let primeraSuma = sumaEnFlecha(5,3);
let segundaSuma = sumaEnFlecha(5,5)

sumaEnFlecha(5,3);

console.log(sumaEnFlecha(primeraSuma, segundaSuma));


console.log(generadorDeMensajes("Diego"));

console.log(oneLineNocheDia(3));

