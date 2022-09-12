//*Crear el array de objetos "Pizzas".
//Debemos crear 6 objetos como mínimo.
//Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 
//
//Crear una iteración del array que imprima en consola:
//a) Las pizzas que tengan un id impar.
//b) ¿Hay alguna pizza que valga menos de $600?
//c) El nombre de cada pizza con su respectivo precio.
//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.
//
//TODAS  las respuestas deben ser USER-FRIENDLY. 
//Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
//Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 
//
//Por ejemplo: "La pizza X, tiene un valor de $XXXX”. */
//
//**CREANDO EL ARRAY "Pizzas" con 6 objetos (id, nombre, ingredientes (lista),
//  precio) 


const pizzas = [{
    id: 1,
    nombre: 'Muzzarella',
    ingredientes: ['salsa de tomate', 'muzzarella especial'],
    precio: 540,
}, {
    id: 2,
    nombre: 'Especial',
    ingredientes: ['salsa de tomate', 'muzzarella', 'jamón cocido', 'aceitunas', 'morrones'],
    precio: 780,
}, {
    id: 3,
    nombre: 'Palmitos',
    ingredientes: ['salsa de tomate', 'muzzarella', 'jamón cocido', 'palmitos'],
    precio: 820,
}, {
    id: 4,
    nombre: 'Fugazzetta',
    ingredientes: ['cebolla', 'muzzarella', 'jamón cocido'],
    precio: 560,
}, {
    id: 5,
    nombre: 'Masa madre',
    ingredientes: ['masa madre', 'tomates salteados', 'muzzarella', 'jamón cocido'],
    precio: 580,
}, {
    id: 6,
    nombre: 'Jamón crudo y rúcula',
    ingredientes: ['salsa de tomate', 'muzzarella', 'jamón crudo', 'rúcula', 'aceite de oliva'],
    precio: 630
}, ];


/**a) Las pizzas que tengan un id impar. */
const pizzasIdImpares = pizzas.filter(p => p.id % 2 !== 0)
pizzasIdImpares.forEach((p) => {
    console.log(`La pizza de ${p.nombre} tiene id impar (id:${p.id}).`)
});

//b) ¿Hay alguna pizza que valga menos de $600?

const pizzasMenores600 = pizzas.filter(p => p.precio < 600)
pizzasMenores600.forEach((p) => {
    console.log(`La pizza de ${p.nombre} tiene un precio de $${p.precio}`)
});

//c) El nombre de cada pizza con su respectivo precio.
pizzas.forEach((p) => {
    console.log(`La pizza de ${p.nombre} sale $${p.precio}.`)
});

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

pizzas.forEach((p) => {
    console.log(`La pizza de ${p.nombre} tiene los siguientes ingredientes:`);
    p.ingredientes.forEach((i) => {
        console.log(`- ${i}`);
    })

});