const form = document.getElementById("formFecha");
const input = document.getElementById("input");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const patron = /^\d{2}\/\d{2}\/\d{4}$/;
    const valor = input.value.trim();

    if (patron.test(valor)) {
        const partes = valor.split("/");
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1;
        const anio = parseInt(partes[2], 10);

        const fechaNacimiento = new Date(anio, mes, dia);
        const hoy = new Date();

        const diferenciaMs = hoy - fechaNacimiento;
        const edadAnios = Math.floor(
            diferenciaMs / (1000 * 60 * 60 * 24 * 365.25),
        );

        alert(
            `Han transcurrido ${edadAnios} años, aproximadamente, desde que naciste`,
        );
    } else {
        alert("Formato incorrecto. Por favor, usa DD/MM/YYYY.");
    }
});