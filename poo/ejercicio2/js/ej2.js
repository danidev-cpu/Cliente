let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    presentarse() {
        console.log("Hola soy " + this.nombre + " tengo " + this.edad + " y mi profesion es " + this.profesion);
    },
    cumplirAnios() {
        this.edad += 1;
    }
};

persona.cumplirAnios();
persona.presentarse();
