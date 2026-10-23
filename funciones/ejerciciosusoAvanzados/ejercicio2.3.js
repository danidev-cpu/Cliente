const personas = [
    { nombre: "Juan", edad: 17 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Pedro", edad: 19 },
    { nombre: "Laura", edad: 16 }
];

const resultado = personas
    .filter(persona => persona.edad > 18)     // Filtra a Ana (22) y Pedro (19)
    .map(persona => persona.edad * 2)         // Multiplica por 2: [44, 38]
    .reduce((acumulador, edad) => acumulador + edad, 0); // Suma todo: 82

console.log(resultado); // 82
