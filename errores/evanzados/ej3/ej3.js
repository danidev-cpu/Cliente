/* Crea una función simulaProceso(exito) que devuelva una promesa. La promesa debe
resolverse con el mensaje "Proceso exitoso" si exito es true, y rechazarse con el mensaje
"Hubo un error" si exito es false. Prueba la función llamándola con un bloque then-catch y
con async-await usando tanto casos exitosos como casos fallidos. */

function simulaProceso(exito) {
    return new Promise((resolve, reject) => {
        if (exito) {
            resolve("Proceso exitoso")
        } else {
            reject(Error("Hubo un error"))
        }
    });
};

simulaProceso(true)
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error.message)
    })

simulaProceso(false)
    .then(resultado => console.log("Éxito:", resultado))
    .catch(error => console.error("Error:", error));

async function probarProcesos() {
    try {
        const resultado = await simulaProceso(true)
        console.log("Async Exitoso", resultado)
    } catch (error) {
        console.log("Async error", error)
    }

    try {
        const resultadoError = await simulaProceso(false)
        console.log("Async Exitoso", resultadoError)
    } catch (error) {
        console.log("Async error", error)
    }
}
probarProcesos()