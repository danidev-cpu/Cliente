let numeros = [4, 21, 33, 12, 9, 54];
let numerosPares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        numerosPares.push(numeros[i])
    }
}
console.log(numerosPares)