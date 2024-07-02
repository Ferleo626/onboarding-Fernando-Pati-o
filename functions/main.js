// Difficulty Level: Low

// function add() {
//     console.log(100 * 20);
// }

// add(); // Output: 2000


// function add(a, b) {
//     console.log(a * b);
// }


// let number1 = 100;
// let number2 = 20;

// add(number1, number2);



// function add(a, b) {
//     let result = a * b;
//     return result;
// }


// let number1 = 100;
// let number2 = 20;

// console.log(add(number1, number2)); 


let add = function(a, b) {
    let result = a * b;
    return result;
};


let number1 = 100;
let number2 = 20;

console.log(add(number1, number2)); 



// Difficulty Level: Medium

function greet(name) {
    console.log(`Hello, ${name}! How are you?`);
}

greet("Fernando");

let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(3, 4)); 
console.log(multiply(5, 6));

function area(base, height) {
    return (base * height) / 2;
}

console.log(area(5, 10)); 
console.log(area(7, 3)); 


function perimeter(a, b, c) {
    return a + b + c;
}

console.log(perimeter(3, 4, 5)); 
console.log(perimeter(6, 7, 8)); 


function totalPrice(price, quantity) {
    let total = price * quantity;
    if (quantity >= 20) {
        return total * 0.8; 
    } else if (quantity >= 10) {
        return total * 0.9; 
    } else {
        return total;
    }
}

console.log(totalPrice(50, 5));   
console.log(totalPrice(50, 15));  
console.log(totalPrice(50, 25));  

function isAnAdult(age) {
    if (age >= 18) {
        return "You are an adult";
    } else {
        return "You are not an adult";
    }
}

console.log(isAnAdult(20));
console.log(isAnAdult(16)); 

 // Difficulty Level: High

function calcularImpuesto(ingresoAnual) {
    let impuesto;
    if (ingresoAnual <= 10000) {
        impuesto = ingresoAnual * 0.10;
    } else {
        if (ingresoAnual <= 20000) {
            impuesto = ingresoAnual * 0.15;
        } else {
            impuesto = ingresoAnual * 0.20;
        }
    }
    return impuesto;
}


console.log(calcularImpuesto(8000));  
console.log(calcularImpuesto(15000)); 
console.log(calcularImpuesto(25000)); 
function verificarDia(dia) {
    let mensaje;
    switch (dia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mensaje = "Es un día hábil.";
            break;
        case 6:
        case 7:
            mensaje = "Es fin de semana.";
            break;
        default:
            mensaje = "Número de día inválido.";
    }
    return mensaje;
}


console.log(verificarDia(3)); 
console.log(verificarDia(6)); 
console.log(verificarDia(8)); 

function ingresarInformacionPersonal() {
    let nombre = prompt("Ingrese su nombre:");
    if (!nombre) {
        console.error("El nombre no puede estar vacío.");
        return;
    }

    let apellido = prompt("Ingrese su apellido:");
    if (!apellido) {
        console.error("El apellido no puede estar vacío.");
        return;
    }

    let edad = prompt("Ingrese su edad:");
    if (!edad) {
        console.error("La edad no puede estar vacía.");
        return;
    }

    let informacionPersonal = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    };

    console.log(informacionPersonal);
}


ingresarInformacionPersonal();
function saludar(nombre) {
    return `Hola, mi nombre es ${nombre}`;
}

function calcularEdad(anioNacimiento, anioActual) {
    return añActual - añoNacimiento;
}

function presentar() {
    let nombre = prompt("Ingrese su nombre:");
    let añoNacimiento = prompt("Ingrese su año de nacimiento:");
    let añoActual = new Date().getFullYear();

    let saludo = saludar(nombre);
    let edad = calcularEdad(añoNacimiento, añoActual);

    alert(`${saludo} y tengo ${edad} años.`);
}

