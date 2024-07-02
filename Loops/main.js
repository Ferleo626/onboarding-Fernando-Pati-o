// Difficulty Level: Low


for (let i = 10; i <= 20; i++) {
    console.log("Current number: " + i);
}
// Reunir Ingredientes y Utensilios: Este paso asegura que tienes todo lo necesario para preparar la omelette antes de comenzar, evitando interrupciones durante el proceso de cocción.

// Preparar los Ingredientes: Romper los huevos en un bol y añadir condimentos asegura que los sabores se mezclen bien durante el batido.

// Batir los Huevos: Batir "hasta que estén esponjosos" significa que los huevos deben incorporar suficiente aire para volverse ligeros y esponjosos, lo que da como resultado una omelette más suave y aireada.

// Preparar la Sartén: Calentar la sartén con aceite o mantequilla evita que la omelette se pegue y asegura una cocción uniforme.

// Cocinar la Mezcla de Huevos: Verter los huevos en la sartén y esperar "hasta que estén cocidos" asegura que la base de la omelette se cocine correctamente. Levantar los bordes permite que el huevo crudo se cocine uniformemente.

// Doblar y Servir: Doblar la omelette por la mitad facilita servirla y le da la clásica forma de omelette.

// Servir: Servir inmediatamente asegura que la omelette se disfrute mientras aún está caliente y fresca.



let numbers = [12, 45, 7, 34, 89, 2, 56, 78, 23, 11];
let largestNumber = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i]; 
    }
}


console.log("The largest number in the array is: " + largestNumber);


let number1 = parseInt(prompt("Ingrese un número entre 1 y 100: "), 10);


if (number1 >= 1 && number1 <= 100) {
    
    for (let i = number1; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.error("El número ingresado no está entre 1 y 100.");
}

let number2 = parseInt(prompt("Ingrese un número entre 1 y 10: "), 10);

if (number2 >= 1 && number2 <= 10) {
    
    for (let i = 1; i <= 10; i++) {
        console.log(i + "x" + number2 + "=" + (i * number2));
    }
} else {
    console.error("El número ingresado no está entre 1 y 10.");
}

let sum = 0;
let number3;

while (true) {
    
    number3 = prompt("Ingrese un número (0 para terminar): ");
    
    
    number3 = parseInt(number3, 10);
    

    if (number3 === 0) {
        break;
    }
    
    
    sum += number3;
}
console.log("La suma total es: " + sum);

let sum1 = 0;
let number4;

do {
    
    number4 = prompt("Ingrese un número (0 para terminar): ");
    
    
    number4 = parseInt(number4, 10);

    if (number4 !== 0) {
        sum1 += number4;
    }
} while (number4 !== 0);


console.log(`La suma total es: ${sum1}`);



const person = {
    name: "John",
    lastName: "Doe",
    age: 30,
    origin: "USA",
    studies: "Computer Science"
};


for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key);
    }
}

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(person[key]);
    }
}

let numeroSecreto = 15; 


let intentos = 0;


while (true) {

    let numero = parseInt(prompt("Ingresa un número para adivinar el número secreto:"));

    
    intentos++;

    
    if (numero > numeroSecreto) {
        console.log("El número ingresado es mayor que el secreto.");
    } else if (numero < numeroSecreto) {
        console.log("El número ingresado es menor que el secreto.");
    } else {
        
        console.log(`¡Acertaste! El número secreto era ${numeroSecreto} y has realizado ${intentos} intentos.`);
        break; 
    }
}


let numero = parseInt(prompt("Ingresa un número para encontrar sus divisores:"));

console.log(`Los divisores de ${numero} son:`);


for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
}


function RingBell() {
    console.log("Ding Dong");
    return "Ding Dong";
}

let veces = parseInt(prompt("Ingresa un número para repetir el sonido de la campana:"));


for (let i = 0; i < veces; i++) {
    RingBell();
}


const dateLimit = "1997-8-3";


const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];


const limitDate = new Date(dateLimit);


for (let date of dates) {
    
    const currentDate = new Date(date);

 
    if (currentDate >= limitDate) {
        console.log(currentDate.toDateString());
    }
}


const colors = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];


for (let color of colors) {
    console.log(color);
}


const familia = [
    { nombre: 'María', apellido: 'López', edad: 40, miembro: 'madre' },
    { nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre' },
    { nombre: 'Romina', apellido: 'Pérez', edad: 13, miembro: 'hija' },
    { nombre: 'Tomás', apellido: 'Pérez', edad: 10, miembro: 'hijo' }
];


function presentarFamilia() {
    for (let miembro of familia) {
        console.log(`Hola soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años.`);
    }
}


presentarFamilia();


const numeros = [5, 7, 1, 3, 50];


for (let numero of numeros) {
    console.log(`El número es ${numero} y su doble es ${numero * 2}`);
}





let sumEven = 0;
let sumOdd = 0;
let number;


while (true) {
    
    number = parseInt(prompt("Ingrese un número (0 para terminar): "), 10);
    
    
    if (number === 0) {
        break;
    }
    
    
    if (number % 2 === 0) {
        sumEven += number;
    } else {
        sumOdd += number;
    }
}

console.log("Even number: " + sumEven);
console.log("Odd numbers: " + sumOdd);
