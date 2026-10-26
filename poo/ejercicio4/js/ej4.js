class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    detalles() {
        console.log("Coche: " + this.marca + " " + this.modelo + " " + this.año)
    }
}
coche1 = new Coche("Toyota", "Corolla", 2022)
coche2 = new Coche("Ford", "Mustang", 2024)

coche1.detalles()
coche2.detalles()