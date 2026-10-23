const incrementar = (function () {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    };
})();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar()); 
