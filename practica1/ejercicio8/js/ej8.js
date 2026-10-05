const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", () => {
    const valor1 = parseFloat(document.getElementById("num1").value);
    const valor2 = parseFloat(document.getElementById("num2").value);
    const valor3 = parseFloat(document.getElementById("num3").value);

    console.log("num1:", valor1);
    console.log("num2:", valor2);
    console.log("num3:", valor3);

    let numeroMayor = 0;
    if (valor1 >= valor2) {
        numeroMayor = valor1;
    }
    if (valor1 >= valor3) {
        numeroMayor = valor1;
    }
    if (valor2 >= valor1) {
        numeroMayor = valor2;
    }
    if (valor2 >= valor3) {
    } else {
        numeroMayor = valor3;
    }
    alert(`El numero mayor es ${numeroMayor}`);

    /* let result = Math.max(valor1.value, valor2.value, valor3.value);
 */
    resultado.innerHTML = numeroMayor;

});