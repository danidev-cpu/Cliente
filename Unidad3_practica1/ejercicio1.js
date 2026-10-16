let data = [
    { name: "Nacho", telephone: "966112233", age: 40 },
    { name: "Ana", telephone: "911223344", age: 35 },
    { name: "Mario", phone: "611998877", age: 15 },
    { name: "Laura", telephone: "633663366", age: 17 }
];

//Parte a
data.push({ name: "Pedro", telephone: "611944444", age: 25 });
data.push({ name: "Julia", phone: "633232323", age: 37 });

//Parte b
console.log("Comprueba con console.log (data) que se han añadido")

for (let i = 0; i < data.length; i++) {
    console.log(data[i])
}

let dataSinOrdenar = [...data]
//Parte c
console.log("Estos son las edades ordenadoas: ")

data.sort((e1, e2) => {
    return e1.age - e2.age;
})

data.forEach(e => {
    console.log(e.age)
});



//Parte d
console.log("Estos son los nombres ordenados: ")
data.sort((e1, e2) => {
    return e1.name.localeCompare(e2.name)
})
data.forEach(e => {
    console.log(e.name)
});

//Parte e
console.log("Mayores de 30 ")

dataSinOrdenar.forEach(e => {
    if (e.age > 30) console.log(e.name)
});