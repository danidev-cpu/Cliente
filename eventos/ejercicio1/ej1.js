let lista = document.getElementById("lista");
let boton = document.getElementById("boton");

boton.addEventListener("click", numAleatorio);
function numAleatorio() {
    let rand = Math.floor(Math.random() * 100);
    let nuevoNodo = document.createElement("li");
    nuevoNodo.textContent = rand;
    lista.appendChild(nuevoNodo);
}