let textArea = document.querySelector("#text-area-container .form-control");
let mainButton = document.querySelector("#main-button");

const logTextArea = () => {
    console.log(textArea.value);
}

mainButton.addEventListener("click", () => logTextArea());

