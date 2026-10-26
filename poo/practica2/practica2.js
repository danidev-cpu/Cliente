class Ordenador {
    constructor(marca, modelo, ram = 4, capacidad = 512, pulgadas = 17) {
        if (!marca || !modelo) {
            throw new TypeError("La marca y el modelo son obligatorios.")
        }

        this.marca = marca
        this.modelo = modelo
        this.ram = ram
        this.capacidad = capacidad
        this.pulgadas = pulgadas
    }

    toString() {
        return `${this.marca} ${this.modelo}: ${this.ram} GB de RAM, ${this.capacidad} GB de disco duro y pantalla de ${this.pulgadas} pulgadas.`
    }
}

class Portatil extends Ordenador {
    constructor(marca, modelo, ram = 4, capacidad = 256, pulgadas = 12, autonomia = 4) {
        super(marca, modelo, ram, capacidad, pulgadas)
        this.autonomia = autonomia
    }

    toString() {
        return `${super.toString()} Autonomía: ${this.autonomia} horas.`
    }
}

function mostrarResultado(texto) {
    const parrafo = document.createElement("p")
    parrafo.textContent = texto
    document.body.appendChild(parrafo)
}

const ordenador = new Ordenador("Lenovo", "RX", 16)
const ordenadorPersonalizado = new Ordenador("HP", "Pavilion", 8, 1024, 15)
const portatil = new Portatil("Apple", "MacBook")
const portatilPersonalizado = new Portatil("Lenovo", "ThinkPad", 16, 512, 14, 10)

mostrarResultado(`Ordenador: ${ordenador}`)
mostrarResultado(`Ordenador personalizado: ${ordenadorPersonalizado}`)
mostrarResultado(`Portátil: ${portatil}`)
mostrarResultado(`Portátil personalizado: ${portatilPersonalizado}`)

const comprobaciones = [
    ["El ordenador usa los valores predeterminados", ordenador.ram === 4 && ordenador.capacidad === 512 && ordenador.pulgadas === 17],
    ["El ordenador acepta valores personalizados", ordenadorPersonalizado.ram === 8 && ordenadorPersonalizado.capacidad === 1024 && ordenadorPersonalizado.pulgadas === 15],
    ["El portátil usa sus valores predeterminados", portatil.ram === 4 && portatil.capacidad === 256 && portatil.pulgadas === 12 && portatil.autonomia === 4],
    ["El portátil acepta valores personalizados", portatilPersonalizado.ram === 16 && portatilPersonalizado.capacidad === 512 && portatilPersonalizado.pulgadas === 14 && portatilPersonalizado.autonomia === 10],
    ["El portátil hereda de Ordenador", portatil instanceof Ordenador],
    ["toString muestra los detalles del ordenador", ordenador.toString().includes("4 GB de RAM, 512 GB de disco duro y pantalla de 17 pulgadas.")],
    ["toString incluye la autonomía del portátil", portatil.toString().includes("Autonomía: 4 horas.")],
]

let errores = 0
for (const [descripcion, resultado] of comprobaciones) {
    const estado = resultado ? "Correcto" : "Error"
    mostrarResultado(`${estado}: ${descripcion}`)
    if (!resultado) errores++
}

for (const [descripcion, marca, modelo] of [
    ["la marca es obligatoria", "", "Modelo"],
    ["el modelo es obligatorio", "Marca", ""],
]) {
    let rechazaDato = false
    try {
        new Ordenador(marca, modelo)
    } catch (error) {
        if (!(error instanceof TypeError)) throw error
        rechazaDato = true
    }
    mostrarResultado(`${rechazaDato ? "Correcto" : "Error"}: ${descripcion}`)
    if (!rechazaDato) errores++
}

mostrarResultado(errores === 0 ? "Todas las comprobaciones han pasado." : `Han fallado ${errores} comprobaciones.`)