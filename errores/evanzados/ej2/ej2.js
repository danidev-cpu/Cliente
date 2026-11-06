function divide(a, b) {
    if (b === 0) {
        console.log("No se puede dividir por cero");
    } else if (typeof a !== "number" || typeof b !== "number") {
        console.log("Debes de insertar números");
    } else {
        return a / b;
    }
}

try {
    console.log(divide(4, 0));
} catch (error) {
    console.log("Debes de insertar números");
}