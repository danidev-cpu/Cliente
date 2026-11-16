async function esperar(ms) {
    let rojo = setTimeout(() => { console.log("ROJO") }, ms);
    let verde = setTimeout(() => { console.log("VERDE") }, ms);
    let ambar = setTimeout(() => { console.log("AMBAR") }, ms);
}

async function semaforo(ciclos) {
    await rojo,
        await verde,
        await ambar;
}