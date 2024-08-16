/* let i = 0;
let arr = [];

while(i <= 100){
    console.log(i);
    i++;
}

console.log(arr);
*/

/* let numero = parseInt(prompt("Dame un número"));

while(numero < 30){
    numero += parseInt(prompt("Dame otro número"));
    console.log(numero);
} */


/* let numero = 0;

do{
    numero += parseInt(prompt("Dame un número"));
    console.log(numero);
}while(numero < 30); */

let pasatiempos = "Videojuegos Gym Guitarra Peliculas Programar Musica Dormir Estudiar";
let arregloPasatiempos = pasatiempos.split(" ");
console.log(arregloPasatiempos);

for(let i = 0; i < arregloPasatiempos.length; i++){
    console.log(arregloPasatiempos[i]);
    console.log(i);
    
}


let arr = ["Azul", "Rojo", "Amarillo", "Vino", "Verde", "Negro", "Blanco"];
console.log(arr);
for (let i=0; i < arr.length; i++){
    
    console.log(arr[i]);
}

let contador = 0;
for (let index = 0; index <= 4; index++){
    contador = contador + index;
    console.log(contador);
}
