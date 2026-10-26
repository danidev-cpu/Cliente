class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad)
    }
    emitirSonido() {
        console.log("¡Guau!")
    }
}