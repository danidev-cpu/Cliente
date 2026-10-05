const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    convertirNumero();
});

function convertirNumero() {
    const numero = Number(document.getElementById("numero").value);

    if (
        document.getElementById("numero").value === "" ||
        Number.isNaN(numero)
    ) {
        alert("Introduce un número válido");
        return;
    }

    document.getElementById("binario").textContent =
        numero.toString(2);
    document.getElementById("octal").textContent =
        numero.toString(8);
    document.getElementById("hexadecimal").textContent = numero
        .toString(16)
        .toUpperCase();
}