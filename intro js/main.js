// Difficulty Level: Low

 let myName = '"Fernando"';

 console.log(myName);
 let mylastName = "Patiño";
 console.log(mylastName);
 let myAge = 23;
 console.log(myAge);
 let myPet = "Michu";
 console.log(myPet);
 let petAge = 7;
 console.log(petAge);
 let nameComplete = myName + mylastName;
 console.log(nameComplete);
 let PresentationText = `My name is ${nameComplete} and I am ${myAge} years old. My pet is ${myPet} and he is ${petAge} years old`;
 console.log(PresentationText)

//  Difficulty Level: Medium


 let sumAges = myAge + petAge;
 console.log(sumAges)
 let restAges = myAge - petAge;
 console.log(restAges)
 let productAges = myAge * petAge;
 console.log(productAges)
 let divideAges = myAge / petAge;
 console.log(divideAges)
 let studient = {
     name: "Fernando",
     lastName: "Patiño",
     age: 23,
    nacionality: "Argentino",
    height: 1.70,}
  console.table(studient)
  let pet = {
      name: "Michu",
      animal: "Cat",
      color: "black",
      age: 7,
      height: 0.5,}
  console.table(pet)
  let frutas = ["Manzana", "Banana", "Pera", "Naranja", "Uva"];
  console.log(frutas.length);
// Difficulty Level: High


let age = prompt("Por favor, ingresa tu edad:");
let IamAdult = age >= 18;


console.log("Soy un adulto: " + IamAdult);


let numeros = [10, 20, 30, 40, 50];


console.log("Matriz números completa:", numeros);
numeros.forEach((numero, index) => {
    console.log("Elemento " + (index + 1) + " de números: " + numero);
});


let familia = [
    {nombre: "Alicia", edad: 30},
    {nombre: "Hernan", edad: 25},
    {nombre: "Carla", edad: 35},
    {nombre: "Aime", edad: 28},
    {nombre: "Fernando", edad: 22}
];


console.log("Matriz familia completa:", familia);
familia.forEach((miembro, index) => {
    console.log("Elemento " + (index + 1) + " de familia: ", miembro);
});





