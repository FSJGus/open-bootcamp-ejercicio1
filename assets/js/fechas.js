const ahora = new Date();
const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const annio = ahora.getFullYear();
let fecha = dia + mes + annio;
console.log(dia, mes, annio);