
// Operador de reposo el cual puede extraer las propiedades de un objeto que aun no se ha construido

const obj = { 
    name: 'Alejandro',
    age: 25,
    country: 'CR'
};


let { country, ...all } = obj;
console.log(all);

// Spread Operator
const obj = {
    name:'Alejandro',
    age: 25
};

const obj1 = {
    ...obj,
    country: 'CR'
};
console.log(obj1);


// Promise.finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000) 
        : reject(new Error('Test Error'))
    });
};
helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))

// 

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-15-10');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);

// Ó

