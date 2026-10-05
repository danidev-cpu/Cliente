const form = document.getElementById("formFecha");
const input = document.getElementById("input");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const patron = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(\d{2}|\d{4})$/;
    const valor = input.value.trim();

    if (patron.test(valor)) {
        alert(
            `Gràcies per introduir la data`,
        );
    } else {
        alert("El format de data no es correcte");
    }
});