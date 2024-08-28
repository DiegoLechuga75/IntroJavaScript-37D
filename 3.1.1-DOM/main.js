let plusBtn = document.querySelector("#plus-button");
let minusBtn = document.querySelector("#minus-button");
let div = document.querySelectorAll(".square");

let toggleBtn = document.querySelector("#toggle-button");
let img = document.querySelector("#image");

let login = document.querySelector("#login");

console.log(div);

const registredUsers = [
    {
        username: "a@gmail.com",
        password: "123",
    },
    {
        username: "diego@gmail.com",
        password: "321",
    },
]

const btnHandler = function(){
    let text = prompt("Dame una frase");
    let title = document.querySelector("#main-title");
    title.innerHTML = text;
}

let counter = 0;

const btnAdding = () => {
    counter++;
    let counterText = document.querySelector("#counter-text");
    counterText.innerHTML = counter.toString();
}

const btnSubstracting = () => {
    counter--;
    let counterText = document.querySelector("#counter-text");
    counterText.innerHTML = counter.toString();
}

const toggleImage = () => {
    if(img.style.display === "block"){
        img.style.display = "none";
        toggleBtn.innerHTML = "Mostrar imagen";
    } else {
        img.style.display = "block";
        toggleBtn.innerHTML = "Ocultar Imagen";
    }
}

const verifyLogin = (username, password) => {
    for(let i = 0; i < registredUsers.length; i++){
        if(username === registredUsers[i].username && password === registredUsers[i].password){
            return `Bienvenido ${username}`;
        }
    }
    return "El usuario o contraseña son incorrectos";
}

const formHandler = (event) => {
    event.preventDefault();
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    let messageDiv = document.querySelector("#login-message");
    messageDiv.innerHTML = `<h1>${verifyLogin(username.value, password.value)}</h1>`
}

plusBtn.addEventListener("click", (e) => btnAdding(e));
minusBtn.addEventListener("click", () => btnSubstracting());

toggleBtn.addEventListener("click", () => toggleImage());

document.querySelector("#cat-image").addEventListener("mouseover", () => {
    console.log("El cursor esta encima");
    document.querySelector("#cat-image").style.transform = "scale(1.1)";
})

document.querySelector("#cat-image").addEventListener("mouseout", () => {
    console.log("El cursor salio");
    document.querySelector("#cat-image").style.transform = "scale(1.0)";
})

login.addEventListener("submit", (event) => formHandler(event));