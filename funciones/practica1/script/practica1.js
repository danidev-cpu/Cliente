function pedirPalabras() {
    let palabra;
    const palabrasUsuario = [];

    do {
        palabra = window.prompt(
            "Introduce una palabra. Vacío o cancelar detiene el proceso.",
        );
        if (palabra) palabrasUsuario.push(palabra);
    } while (palabra);

    const listaSet = new Set();
    for (let i = 0; i < palabrasUsuario.length; i++) {
        listaSet.add(palabrasUsuario[i]);
    }

    palabrasUsuario.sort();
    palabrasUsuario.reverse();

    console.log(`Palabras introducidas: ${palabrasUsuario}`);
}

pedirPalabras();