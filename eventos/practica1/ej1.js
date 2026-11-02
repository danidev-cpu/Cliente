let imagen = document.getElementById("imagen");
window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === "b")
        imagen.style.backgroundImage =
            "url('https://picsum.photos/id/237/1680/1050')";
});