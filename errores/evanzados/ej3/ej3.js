let promesa = new Promise(resolve, reject)

reject(Error("La operacion fallo"))


function simulaProceso(exito) {
    let exito = true
    if (exito) {
        resolve("La operacion fue exitosa")
    }
}