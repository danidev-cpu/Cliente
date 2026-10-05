const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    leerContent();
});

function leerContent() {
    const input = document
        .getElementById("input")
        .value.toUpperCase();
    const tabla = document.getElementById("resultado");
    const nuevaFila = document.createElement("tr");

    for (let i = 0; i < input.length; i++) {
        const nuevaCelda = document.createElement("td");
        nuevaCelda.textContent = input[i];
        nuevaFila.appendChild(nuevaCelda);
    }
    tabla.appendChild(nuevaFila);

    formulario.reset();
}