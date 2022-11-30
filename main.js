let inputform = document.querySelectorAll('input');
let text = document.querySelectorAll('span');
let container = document.querySelector(".container");

inputform.addEventListener("click", () => {
    text.classList.add("cambiar")
});