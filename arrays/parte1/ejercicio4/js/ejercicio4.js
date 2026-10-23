const palabras = ["ana", "radar", "javascript", "reconocer", "oro", "palindromo", "salas"]

let palindromos;
palabras.forEach(e => {
    if (e.split('').reverse().join('') == e) {
        palindromos += e + " ";
    }
});
console.log(palindromos)