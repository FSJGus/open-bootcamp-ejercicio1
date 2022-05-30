var variable;
let variableLet;

const constante = "Soy una constante";

var a = 1;
console.log(a);

a = 4;
console.log(a);

console.log(constante);
// constante = "Otra cosa";

let f = null;
let b = 3;
b = 5;
console.log(b);

var variable = "Soy una variable";
for (var i = 0; i < 3; i++){
    var variable = `Te lo digo ${i} veces`;
    console.log(variable);
}

console.log(typeof a);
console.log(typeof b);
console.log(typeof variable);
console.log(typeof f);



