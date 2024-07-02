//Difficulty Level: Low

let edad = 18;

if (edad >= 18) {
    console.log("You're of age.");
} else {
    console.log("You are minor.");
}

let num1 = 4;
let num2 = 5;

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}
let num3 = 4;
let num4 = 5;

if (num3 > num4) {
    console.log(num3);
} else if (num4 > num3) {
    console.log(num4);
} else {
    console.log("The numbers are equal");
}
let num5 = 4;
let num6 = 5;

if (num5 === num6) {
    console.log("The numbers are equal");
} else {
    console.log("The numbers are different");
}
let date1 = "2018-9-2";
let date2 = "2023-7-5";

if (date1 > date2) {
    console.log(`The date ${date1} is greater than the date ${date2}`);
} else if (date1 < date2) {
    console.log(`The date ${date2} is greater than the date ${date1}`);
} else {
    console.log("The dates are the same");
}
let number1 = 5;
let number2 = 7;
let number3 = 9;

if (number1 > number2 && number1 > number3) {
    console.log(`The number ${number1} is the largest`);
} else if (number2 > number1 && number2 > number3) {
    console.log(`The number ${number2} is the largest`);
} else {
    console.log(`The number ${number3} is the largest`);
}
// Nivel de dificultad: medio
let color = prompt("Enter a color (red, blue, green):");

switch(color.toLowerCase()) {
    case 'red':
        console.log("The color of passion");
        break;
    case 'blue':
        console.log("The color of the sea.");
        break;
    case 'green':
        console.log("The color of nature");
        break;
    default:
        console.log("Unknown color");
}
let num7 = parseInt(prompt("Enter the first number (1-100):"));
let num8 = parseInt(prompt("Enter the second number (1-100):"));
let operation = prompt("Enter the operation (addition, subtraction, multiplication, division):");

switch(operation.toLowerCase()) {
    case 'addition':
        console.log(`The sum of ${num7} and ${num8} is ${num7 + num8}`);
        break;
    case 'subtraction':
        console.log(`The subtraction of ${num7} from ${num8} is ${num7 - num8}`);
        break;
    case 'multiplication':
        console.log(`The multiplication of ${num7} and ${num8} is ${num7 * num8}`);
        break;
    case 'division':
        if (num8 !== 0) {
            console.log(`The division of ${num7} by ${num8} is ${num7 / num8}`);
        } else {
            console.log("Division by zero is not allowed");
        }
        break;
    default:
        console.log("Unknown operation");
}
let person1 = { name: 'Juan', age: 39, height: 1.69 };
let person2 = { name: 'Rosa', age: 35, height: 1.65 };

if (person1.height > person2.height) {
    console.log(`${person1.name} is taller than ${person2.name}`);
} else if (person1.height < person2.height) {
    console.log(`${person2.name} is taller than ${person1.name}`);
} else {
    console.log(`${person1.name} and ${person2.name} are of the same height`);
}

if (person1.age > person2.age) {
    console.log(`${person1.name} is older than ${person2.name}`);
} else if (person1.age < person2.age) {
    console.log(`${person2.name} is older than ${person1.name}`);
} else {
    console.log(`${person1.name} and ${person2.name} are of the same age`);
}
let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));
let height = parseFloat(prompt("Enter your height in cm:"));
let vision = parseFloat(prompt("Enter your vision (out of 10):"));

if (age >= 18 && height > 110 && vision >= 8) {
    console.log("You are qualified to drive");
} else {
    console.log("You are not qualified to drive");
}
 age = parseInt(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    alert("You are an infant");
} else if (age >= 13 && age <= 18) {
    alert("You are an adolescent");
} else if (age >= 19 && age <= 45) {
    alert("You are an older young");
} else if (age > 45 && age <= 100) {
    alert("You are an elderly");
} else if (age > 100) {
    alert("Is he really that old?");
} else {
    alert("Invalid age");
}
let number = parseInt(prompt("Enter a number from 1 to 3:"));
let anotherNumber = parseFloat(prompt("Enter another number:"));

switch(number) {
    case 1:
        alert(`The number entered is ${anotherNumber}`);
        break;
    case 2:
        alert(`Twice the number entered is ${anotherNumber * 2}`);
        break;
    case 3:
        alert(`Three times the number entered is ${anotherNumber * 3}`);
        break;
    default:
        alert("That value is not allowed");
}






// Nivel de dificultad: alto

let nombreCliente = prompt("Por favor, ingresa tu nombre:");
let pase = prompt("¿Tienes pase VIP o normal? (vip/normal):").toLowerCase();
let entrada = prompt("¿Tienes una entrada? (si/no):").toLowerCase();


if (nombreCliente === "TuNombre" || pase === "vip") {
    console.log("¡Bienvenido!");

    if (entrada === "si") {
        let usarEntrada = prompt("¿Quieres usar tu entrada? (si/no):").toLowerCase();
        if (usarEntrada === "si") {
            console.log("¡Bienvenido!");
        } else {
            console.log("¡Hasta luego!");
        }
    } else {
        let comprarEntrada = prompt("¿Quieres comprar una entrada? (si/no):").toLowerCase();
        if (comprarEntrada === "si") {
            let dineroDisponible = prompt("¿Cuánto dinero tienes disponible?");
            if (dineroDisponible > 1000) {
                console.log("Venta exitosa. ¡Bienvenido!");
            } else {
                console.log("Venta rechazada. ¡Hasta luego!");
            }
        } else {
            console.log("¡Hasta luego!");
        }
    }
} else {
    if (entrada === "si") {
        let usarEntrada = prompt("¿Quieres usar tu entrada? (si/no):").toLowerCase();
        if (usarEntrada === "si") {
            console.log("¡Bienvenido!");
        } else {
            console.log("¡Hasta luego!");
        }
    } else {
        let comprarEntrada = prompt("¿Quieres comprar una entrada? (si/no):").toLowerCase();
        if (comprarEntrada === "si") {
            let dineroDisponible = prompt("¿Cuánto dinero tienes disponible?");
            if (dineroDisponible > 1000) {
                console.log("Venta exitosa. ¡Bienvenido!");
            } else {
                console.log("Venta rechazada. ¡Hasta luego!");
            }
        } else {
            console.log("¡Hasta luego!");
        }
    }
}





