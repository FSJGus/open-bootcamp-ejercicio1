const datosGustavo = [
    // Datos (nombre, edad, desarrolador?, fecha de nacimiento)
    "Gustavo", 53, true, new Date(1968, 11, 25),
    // Libro Favorito
    {
        title: "Elocuent Javascript, 3rd edition",
        author: "Marjin Haverbeke",
        fecha: "2018",
        url: "https://eloquentjavascript.net/"
    }

];
console.log(datosGustavo[4])
console.log(datosGustavo)
datosGustavo.forEach(object => {
    console.log(object);
});


