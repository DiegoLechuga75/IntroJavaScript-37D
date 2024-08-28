let plusBtn = document.querySelector("#plus-button");
let minusBtn = document.querySelector("#minus-button");
let div = document.querySelectorAll(".square");

let toggleBtn = document.querySelector("#toggle-button");
let img = document.querySelector("#image");

let login = document.querySelector("#login");

console.log(div);

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

const formHandler = (event) => {
    event.preventDefault();
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    console.log(username, password);
}

plusBtn.addEventListener("click", () => btnAdding());
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