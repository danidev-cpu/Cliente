const boton = document.getElementById("convertir");
const input = document.getElementById("input");
const invInput = document.getElementById("invInput");
const mayusInput = document.getElementById("mayusInput");
const repInput = document.getElementById("repInput");
const invMayusInput = document.getElementById("invMayusInput");

function convertir() {


    const texto = input.value.trim();
    // Value invertido
    const invertido = texto.split("").reverse().join("");
    invInput.value = invertido;

    // Value en mayusculas
    mayusInput.value = texto.toUpperCase();

    // Value repetido
    repInput.value = texto.repeat(2);

    // Invertida en mayúsculas
    invMayusInput.value = invertido.toUpperCase();
}

if (boton) {
    boton.addEventListener("click", convertir);
}