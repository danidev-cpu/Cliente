const formulario = document.getElementById("formulario-nombre");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    setCookie("nombre", nombre, 7);
    document.getElementById("bienvenida").textContent =
        `Bienvenido, ${nombre}`;
    document.getElementById("bienvenida").hidden = false;
});

function setCookie(nombre, valor, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${nombre}=${valor}; ${expires}; path=/`;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}