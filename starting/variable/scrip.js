//En este caso, la variable score se declara y se le asigna el valor 10. 
// Si deseas actualizar el valor más tarde, puedes hacerlo fácilmente:
let score = 10;
console.log(score); // 10
score = 20;
console.log(score); // 20



//Por otro lado, const se utiliza para declarar variables 
// que son constantes. Una vez que asignas un valor a una 
// variable declarada con const, no puedes reasignarla.

const maxScore = 100;
console.log(maxScore); // 100


//Aquí hay un ejemplo de cómo crear dos variables que 
// contienen valores de cadena:

let singleQuotes = 'This is a string';
console.log(singleQuotes);
let doubleQuotes = "This is also a string";
console.log(doubleQuotes);


//Para cambiar el valor, asignas una cadena completamente 
// nueva a la variable developer:

let developer = "Jessica";
console.log(developer);
developer = "Quincy";
console.log(developer);

//la concatenación de cadenas, específicamente usando el operador +, 
// el operador += y el método concat()

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; 
console.log(fullName); // John Doe


//Si necesitas agregar o anexar a una cadena existente,
//  entonces puedes usar el operador +=.
let greeting = 'Hello';
greeting += ', John!';

console.log(greeting); // Hello, John!

//el método concat() para unir dos cadenas de texto:
let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); 
console.log(result); // Hello World

//El método console.log() te ayuda a monitorizar tu código a medida que
//  se ejecuta, lo que facilita detectar errores y entender cómo se 
// comporta tu programa.


//En JavaScript, un punto y coma (;) se utiliza para indicar el final 
// de una sentencia.

let variableOne = 5;  // Declare a variable and assign a value
let variableTwo = 10; // Declare another variable and assign a value


/*
 I am a multiline comment.
 This is helpful for longer explanations.
*/

// This code uses the const keyword to create a new variable called price.
// We are assigning the number 10 to the price variable.
const price = 10;