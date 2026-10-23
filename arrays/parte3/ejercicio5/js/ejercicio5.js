
let palabras = ["Daniel", "Nuria", "Paco", "Daniel", "Daniel"]

function contarOcurrencias(palabras) {
    const mapPalabras = new Map();
    for (let i = 0; i < palabras.length; i++) {
        const element = palabras[i];
        let contador = mapPalabras.get(element) || 0;
        mapPalabras.set(element, contador + 1);
    }

    return mapPalabras;
}
let resultado = contarOcurrencias(palabras)
for (let [clave, valor] of resultado) {
    console.log(`${clave}: ${valor}`);
}
