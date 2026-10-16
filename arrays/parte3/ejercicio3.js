const nombres = new Set(['Daniel', 'Paco', 'Nuria'])

let anyadoNombre = 'Marcos'


if (nombres.has(anyadoNombre)) {
    console.log('Este nombre esta en el set')
    console.log(nombres)
} else {
    nombres.add(anyadoNombre)
    console.log(nombres)
}