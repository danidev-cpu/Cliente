let color = prompt("Introduce el color de fondo que quiera (á ‘R’ para rojo, ‘V‘ para verde o ‘A’ para azul)");

let fondo = document.getElementById("fondo");

switch (color) {
    case 'R': fondo.style.backgroundColor = "red"; break;
    case 'V': fondo.style.backgroundColor = "green"; break;
    case 'A': fondo.style.backgroundColor = "blue"; break;
    default:
        alert("Color no valido");

}