const data = {
    frontend: 'Alejandro',
    backend:'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)// Saber cuantos elementos tiene un array con.length para hacer la valoración 


// Object values el cual vuelve un array de strings a Objects
const data = {
    frontend: 'Alejandro',
    backend:'Isabel',
    design: 'Ana',
}

const values = Object.values(data); // Con Object,values() pasamos un array a un object
console.log(values);
console.log(values.length); //nuevamente para saber cuantos elementos contiene



// padding como poder anteponer o agregar una cadena vacía o elementos a este string

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, ' -----')) // podría servir para representar una estructura de elementos, como por ejemplo una lista de compra un menú etc
console.log('food'.padEnd(12, ' ------'))



// Async await


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000) //en esta linea le estoy asignado cuanto tiempo tardaría en ser activado 
        : reject(new Error('Test Error'))
    })
};

// Tanto como la anterior función como la siguiente cumplen la misma lógica, simplemente una es mas prolija que otra por su lectura 

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

// Otra propuesta

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();
 




// Simulación de una venta de helados
// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(600); //1. llamas a la función comprar helado e Ingresas el dinero
