/*
. Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos
. Array.prototype.flatMap(): lo mismo que flat con el beneficio de que primero manipular la data para luego aplanar.
. String.prototype.trimStart()  String.prototype.trimEnd(): permite quitar los espacios al inicio o al final dependiendo de la función.
. try/catch: ahora se emplean sin necesidad de especificar como catch(error) si no que se usa directamente en el scope del catch.
. Object.fromEntries(): lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
. Symbol.prototype.description: permite regresar el descripción del Symbol.


*/

//method flat
//devolver una matriz con una sub-matriz aplanada, 
//recibe como argumento la profundidad

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));
//flatMap
//mapear de cada elemento, luego se le pasar una función y aplanar
let array =  [1,2,3,4,5];
console.log(array.flatMap(value => [value *=  2]));


// trim

let hello = '      hello World';
console.log(hello);
console.log(hello.trimStart()); // inicio

// 

let Hello = ' hello World    ';
console.log(Hello);
console.log(Hello.trimEnd()); // final

//optional catch biding

try {
    
} catch/*(error) ya no es necesario colocarlo*/ {
    error
}

// fromEntries

// array to object
let entries = [["name", "alejandro"], ["age", 25]];
console.log(Object.fromEntries(entries));

// Symbol Object

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);