const nombres = new Map()

nombres.set("Daniel", 16)
nombres.set("Nuria", 18)
nombres.set("Paco", 20)
nombres.set("Daniel", 16)

console.log("Nombres sin actualizar:")
for (let [clave, valor] of nombres) {
    console.log(`${clave}: ${valor}`);
}

nombres.set("Daniel", 20)

console.log("Nombres actualizados:")
for (let [clave, valor] of nombres) {
    console.log(`${clave}: ${valor}`);
}