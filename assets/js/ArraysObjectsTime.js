// Listas, Array o arreglo
const lista1 = [null, 10, true, undefined, "Hola"];
const lista2 = new Array(null, 10, true, undefined, "Hola");
const lista3 = new Array(3); // se define los espacios del array
lista3[0] = "Primer elemento 0"

const lista4 = [lista1, lista2, lista3];

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
const mobileOnSale1 = {
    mobileBrand: "Samsung",
    mobileModel: "S22",
    weightInGrams: 200,
    color: "Black",
    isFree: true,
    modelReference: ["S10", "S4", "SMismo"],
    sdCardType: {
        brandSD: "Sandisk",
        storageGB: 32
    },
    "size-screen": 3.5
}
/* Los nombres de las caracteristicas de los objetos no pueden llevar signos como - por ej.
para eso se crea el nuevo key entre "", ej. "size-screen": 3.5*/
// Se pueden agregar mas datos del objetos de la siguiente forma.
mobileOnSale1.annio = 2021;

console.log(mobileOnSale1);

// Fechas
// Librerias de apoyo para fechas moment.js
const ahora = new Date();
console.log(ahora);

const fechaMilisegundo = new Date(1); //utilizando milisegundos
console.log(fechaMilisegundo);

const fechaCadena = new Date("may 28 2022");
console.log(fechaCadena);

const fechaValores = new Date(2022, 4, 28); //El mes se define en posición desde 0 como en array
console.log(fechaValores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const annio = ahora.getFullYear();
let fecha = dia + mes + annio;
console.log(dia, mes, annio);





