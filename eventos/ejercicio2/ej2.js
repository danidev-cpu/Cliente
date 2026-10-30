const result = document.getElementById("result");

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    result.textContent = `X: ${x} Y: ${y}`;
});