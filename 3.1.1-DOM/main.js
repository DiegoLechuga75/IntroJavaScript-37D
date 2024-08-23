let plusBtn = document.querySelector("#plus-button");
let minusBtn = document.querySelector("#minus-button");
let div = document.querySelectorAll(".square");

let toggleBtn = document.querySelector("#toggle-button");
let img = document.querySelector("#image");


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

plusBtn.addEventListener("click", () => btnAdding());
minusBtn.addEventListener("click", () => btnSubstracting());

toggleBtn.addEventListener("click", () => toggleImage());