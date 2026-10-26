class Rectangulo {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            this.width = 1
            this.height = 1
        } else {
            this.width = width
            this.height = height
        }
    }
    cambiarDimensiones(width, height) {
        this.width = width
        this.height = height
    }

    calcularArea() {
        return this.width * this.height
    }
    copia() {
        return new Rectangulo(this.width, this.height)
    }
    comparar(otroRectangulo) {
        if (this.calcularArea() > otroRectangulo.calcularArea()) {
            return "Es mayor"
        }
        if (this.calcularArea() < otroRectangulo.calcularArea()) {
            return "Es menor"
        }
        return "Es igual"
    }
}

function mostrar(texto) {
    const parrafo = document.createElement("p")
    parrafo.textContent = texto
    document.body.appendChild(parrafo)
}

let rect1 = new Rectangulo(2, 4)
let miCopiaAntigua = rect1.copia()
rect1.cambiarDimensiones(4, 4)

mostrar(`Rectángulo actual: ${rect1.width} × ${rect1.height}`)
mostrar(`Área del rectángulo actual: ${rect1.calcularArea()}`)
mostrar(`Copia anterior: ${miCopiaAntigua.width} × ${miCopiaAntigua.height}`)
mostrar(`Área de la copia: ${miCopiaAntigua.calcularArea()}`)
mostrar(`Comparación de la copia con el rectángulo actual: ${miCopiaAntigua.comparar(rect1)}`)

