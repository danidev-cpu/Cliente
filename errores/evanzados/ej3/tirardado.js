function tirarDado() {
    let random = Math.floor(Math.random() * 6) + 1
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (random === 1) reject(Error("Ha salido un 1: pierdes"));
            else resolve(random)
        }, 100);

    })
}
tirarDado()
    .then(valor => {
        console.log("Has sacado un " + valor)
    })
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Fin de la tirada"))
