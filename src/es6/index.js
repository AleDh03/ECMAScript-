function newFunction(name, age, country) {
    var name = mame || 'Alejandro';
    var age = age || 25;
    var country = country || 'Cr'
    console.log(name, age, country);
}

//  es6
function newFunction2(name = 'Alejandro', age = 32, country = 'Cr' ){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Lía', '23', 'Cr');


// 

let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// es5

let lorem = 'Hola, Soy programador y me encanta serlo y aprender mucho\n'
+ 'Si en serio que amo y disfruto esto de ser programador'

// es6

let lorem2 = `Disfruto cada tecla 
 que oprimo`; // `comillas francesas para el espacio o bien comillas inversas como cuando uso curls en cierras funciones para llamar un this`

console.log(lorem);
console.log(lorem2);

// es6  Destructuring

let person = {
    'name': 'alejo',
    'age': 25,
    'country': 'CR'
}
console.log(person.name, person.age, person.country);

let { name } = person;
console.log(name);

// es6

let team1 = ['Alejandro', 'Oscar', 'María'];
let team2 = ['lina', 'Valeria', 'Camilla'];

let education = ['David', ...team1, ...team2];
console.log(education);
 
// 
// 


{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);  //Function scope 

}

console.log(globalVar);  //  Global Scope

// 
// const no permite manejar siempre la asignación establecida!

const a = 'b';
a = 'a';
console.log(a);

// 
// 

let name = 'Alex';
let age = 25;

// es5

obj = {name: name, age: age};

// es6

obj2 = {name, age};
console.log(obj2);

// 

const names = [
    {name: 'Alex', age: 25},
    {name: 'Lía', age: 20}
]
let  listOfNames = names.map(function (item){
    console.log(item.name);
});

// arrow function 

let listOfNames2 = names.map(item => console.log(item.name));

// 

const listOfNames3 = (names, age, country) => {
    console.log(item.names)
};

// en esta modalidad de arrow function solo estoy pasando un parámetro por eso no se ponen los paréntesis ya que se sobreentiende 
const listOfNames4 = name => {
    console.log(item.names);
};

// 

const square = num => num * num;

// Promesas con las cuales podemos ejecutar el asynchronism de JS, lo que quiere decir que va ejecutando elemento por elemento en cola!

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true){
            resolve('Hey')
        }else{
            reject('Ups!!');
                  }
                  });
                };

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));



// Clases: una mas clara para manejar objetos y herencias. lo que nos permite aplicar la OOP

class calculator {
    // constructor
    constructor(){ //método para iniciar nuestra clase 
        this.valueA = 0; //se asignan las variables para que estén disponibles 
        this.valueB = 0; // para un scope global 
    }
    // método
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
};

const calc = new calculator();
console.log(calc.sum(2, 3));

//con la palabra reservada de import me traigo files, function o lo que necesite importar  

import{hello} from './module';
hello();

// generation es una function especial que retorna una serie de valores según el algoritmo definido, se escribe function y un asterisco *

function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }if (true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)


//  mas a detalle 

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    res(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA - this.valueB;
    }
    mul(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA * this.valueB;
    }
    div(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA / this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(6,18));
console.log(calc.res(6,18));
console.log(calc.mul(6,18));
console.log(calc.div(18,5));

// 

