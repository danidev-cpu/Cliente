let colores = ["rojo", "verde", "azul", "amarillo", "naranja", "violeta"]
let nuevosColores = colores.slice(0, 4)
console.log(nuevosColores)
colores.splice(3, 5, "negro", "blanco")

console.log(colores)
