// Ejercicio 3. Crear una promesa: esperar

function esperar(ms) {
    return new Promise((resolve, reject) => resolve(setTimeout({ resolve }, ms)))
}

function conThen() {
    console.log('Empiezo (then)')
    return esperar(200).then(() => console.log('Listo (then'));
}
async function ordenPromesa() {
    console.log('Empiezo aqui');
    await esperar(200)
    console.log("Termino aqui")
}
conThen().then(ordenPromesa)

