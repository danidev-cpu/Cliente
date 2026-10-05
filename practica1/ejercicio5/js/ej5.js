const btnVerde = document.getElementById("btnVerde");
const btnRojo = document.getElementById("btnRojo");
const btnAzul = document.getElementById("btnAzul");
const titulo = document.getElementById("titulo");

btnRojo.addEventListener("click", () => {
    titulo.style.color = "red";
});

btnVerde.addEventListener("click", () => {
    titulo.style.color = "green";
});

btnAzul.addEventListener("click", () => {
    titulo.style.color = "blue";
});


