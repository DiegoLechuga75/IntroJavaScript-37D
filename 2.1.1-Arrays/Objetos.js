let personas = [
    {
        nombre: "Diego",
        edad: 20,
        esMayorDeEdad: true,
        pasatiempos: ["Videojuegos", "Gym", "Guitarra", "Peliculas", "Programar"],
        estudios: "",
        saludo: function(nombre){
            console.log(`Holaaa ${nombre}`);
        },
    },
    {
        nombre: "Ana",
        edad: 22,
        esMayorDeEdad: true,
        pasatiempos: ["Videojuegos", "Gym", "Guitarra", "Peliculas", "Programar"],
        estudios: "Licenciatura",
        saludo: function(nombre){
            console.log(`Holaaa ${nombre}`);
        },
    }
]

let {nombre, edad, esMayorDeEdad} = personas[0];

console.log(`Hola me llamo ${personas[0].nombre} y tengo ${edad} años`);

console.log("Hola me llamo " + personas[0].nombre + " y tengo " + edad + " años");


