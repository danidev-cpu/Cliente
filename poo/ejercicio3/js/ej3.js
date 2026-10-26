let libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
    añoPublicacion: 1967
}

for (let clave in libro) {
    console.log(`${clave}: ${libro[clave]}`);
}