let nombre = prompt("Introduce una cadena de texto");
let contadorA = 0;

for (let i = 0; i < nombre.length; i++) {
    if (nombre[i].toLowerCase() === "a") {
        contadorA++;
    };
}
window.alert(`La cadena tiene un total de ${contadorA} letras 'a'`);



