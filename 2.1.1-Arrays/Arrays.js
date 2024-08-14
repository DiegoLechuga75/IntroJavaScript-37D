let amigos = [
    "Angel",
    "Marian",
    "Lalo"
    ];

console.log(amigos[2]);
amigos[2] = "Carlos";

console.log(amigos[2]);
console.log(amigos.length);

//Metodos para añadir y eliminar al final
amigos.push("Yahir");
console.log(amigos);

amigos.pop();
console.log(amigos);

//Metodos para añadir y eliminar al inicio
amigos.unshift("Hannah");
console.log(amigos);

amigos.shift();
console.log(amigos);

let pasatiempos = "Videojuegos Gym Guitarra Peliculas Programar";
let arregloPasatiempos = pasatiempos.split(" ");
console.log(arregloPasatiempos);

let newArregloPasatiempos = arregloPasatiempos.slice(1,4);
console.log(newArregloPasatiempos);


arregloPasatiempos.splice(2,2,"Música");
console.log(arregloPasatiempos);

//Experimento con concat
let newAmigos = amigos.concat(amigos);
console.log(newAmigos);


