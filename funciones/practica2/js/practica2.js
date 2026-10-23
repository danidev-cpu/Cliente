function contarPalabras(palabras) {
    const mapaFrecuencias = new Map();

    for (const palabra of palabras) {
        const cantidadActual = mapaFrecuencias.get(palabra) || 0;
        mapaFrecuencias.set(palabra, cantidadActual + 1);
    }

    return mapaFrecuencias;
}

function pedirPalabras() {
    let palabra;
    const palabrasUsuario = [];

    do {
        palabra = window.prompt(
            "Introduce una palabra. Vacío o cancelar detiene el proceso.",
        );

        if (palabra && palabra.trim() !== "") {
            palabrasUsuario.push(palabra.trim());
        }
    } while (palabra && palabra.trim() !== "");

    const mapaResultado = contarPalabras(palabrasUsuario);

    const contenedor = document.getElementById("resultado");

    if (mapaResultado.size === 0) {
        contenedor.textContent = "No se introdujo ninguna palabra.";
        return;
    }

    const lista = document.createElement("ul");
    mapaResultado.forEach((frecuencia, palabra) => {
        const elemento = document.createElement("li");
        elemento.textContent = `"${palabra}": ${frecuencia} vez/veces`;
        lista.appendChild(elemento);
    });

    contenedor.appendChild(lista);
}

pedirPalabras();
