/**JavaScript hace esto fácil con dos métodos integrados:
 *  toUpperCase() y toLowerCase(). */

let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting);  // "HELLO, WORLD!"

const lowerCaseGreeting = greeting.toLowerCase();
console.log(lowerCaseGreeting);

let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout); 


/*************************************************************** */
/**¿Cómo puedes eliminar los espacios en blanco de una cadena de texto? */

const message = "   Hello there!   ";
console.log(message); // "   Hello!   "

const withaoutSpace = message.trim();
console.log(withaoutSpace);

const greetingS = "   Hi there fellas!    ";
console.log(greetingS);
const greetStart = greetingS.trimStart();
console.log(greetStart);

const greetEnd = greetingS.trimEnd();
console.log(greetEnd);