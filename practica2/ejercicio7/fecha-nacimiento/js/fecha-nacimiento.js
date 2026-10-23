let input = prompt("¿Qué día naciste? YYYY/MM/DD");

let patron = /^\d{4}\/\d{2}\/\d{2}$/;

if (patron.test(input)) {
    let partes = input.split("/");
    let anio = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;
    let dia = parseInt(partes[2]);

    let fechaNacimiento = new Date(anio, mes, dia);
    let hoy = new Date();

    let diferenciaMs = hoy - fechaNacimiento;
    let dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

    alert(
        `Han transcurrido ${dias} días, aproximadamente, desde que naciste`,
    );
} else {
    alert("Formato incorrecto. Por favor, usa YYYY/MM/DD.");
}
