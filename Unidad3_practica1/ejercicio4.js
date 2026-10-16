let combinaciones = Array(50)

for (let i = 0; i < combinaciones.length; i++) {
    let sinDuplicar = new Set();
    while (sinDuplicar.size < 6) {
        let numRand = Math.floor(Math.random() * 49)
        sinDuplicar.add(numRand)
    }
    combinaciones[i] = sinDuplicar;
}
for (let j = 0; j < combinaciones.length; j++) {
    console.log(combinaciones[j])
}

