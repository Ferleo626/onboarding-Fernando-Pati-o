//Difficulty Level: Low

// Reglas del juego "Piedra, Papel, Tijeras"
// Si ambos jugadores eligen Piedra, entonces es un empate.
// Si ambos jugadores eligen Papel, entonces es un empate.
// Si ambos jugadores eligen Tijeras, entonces es un empate.
// Si el Jugador 1 elige Piedra y el Jugador 2 elige Tijeras, entonces gana el Jugador 1.
// Si el Jugador 1 elige Piedra y el Jugador 2 elige Papel, entonces gana el Jugador 2.
// Si el Jugador 1 elige Papel y el Jugador 2 elige Piedra, entonces gana el Jugador 1.
// Si el Jugador 1 elige Papel y el Jugador 2 elige Tijeras, entonces gana el Jugador 2.
// Si el Jugador 1 elige Tijeras y el Jugador 2 elige Papel, entonces gana el Jugador 1.
// Si el Jugador 1 elige Tijeras y el Jugador 2 elige Piedra, entonces gana el Jugador 2.

// 2. Condicionales
// IF IT'S RAINING, I use umbrella ☔. (ACTION)
// IF IT'S COLD, I wear a coat. (ACTION)
// IF IT'S NIGHT, I LOOK AT THE STARS. (CONDITION)
// IF I AM HUNGRY, I EAT AN EMPANADA. (CONDITION)
// IF IT'S QUIET, I READ A BOOK. (CONDITION)
// IF THEY GIVE ME A GIFT, I THANK THEM. (ACTION)

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
// Difficulty Level: Medium

// console.log("Abrir la ventana");

// if (estaLloviendo) {
//     console.log("Tomar un paraguas");
//     console.log("Ponerse un piloto");
// }

// console.log("Salir afuera");


// console.log("Ejecutar Tarea1");

// if (condición) {
//     console.log("Ejecutar Tarea2");
// }

// console.log("Ejecutar Tarea3");

// console.log("Ejecutar Tarea1");

// if (condición) {
//     console.log("Ejecutar Tarea2");
//     console.log("Ejecutar Tarea3");
// }

// console.log("Ejecutar Tarea4");

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





