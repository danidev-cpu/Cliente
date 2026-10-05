const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    numMayor();
});

const item1 = document.getElementById("item1").value;
const item2 = document.getElementById("item2").value;
const item3 = document.getElementById("item3").value;
const item4 = document.getElementById("item4").value;
const item5 = document.getElementById("item5").value;
const item6 = document.getElementById("item6").value;
const item7 = document.getElementById("item7").value;
const item8 = document.getElementById("item8").value;
const item9 = document.getElementById("item9").value;

function numMayor() {
    let mayor = Math.max(
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        item7,
        item8,
        item9,
    );

    alert("El numero mayor es el: " + mayor);
}