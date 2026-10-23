const nombre = ["Daniel", "Nuria", "Pablo", "Monica", "Marcos"];
const edades = [21, 20, 17, 32, 18]

let mayoresDeEdad = []

for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
        mayoresDeEdad = nombre[i];
        console.log(mayoresDeEdad)
    }
}

