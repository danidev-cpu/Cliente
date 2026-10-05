const fecha = new Date();

const opciones = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
alert("Hoy es, " + fechaFormateada);
