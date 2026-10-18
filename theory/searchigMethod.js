/**El método includes() se utiliza para verificar si una cadena contiene 
 * una subcadena específica. Si se encuentra la subcadena dentro de la 
 * cadena, el método devuelve true, de lo contrario, devuelve false. */

let phrase = "JavaScript is awesome!";
let resultd = phrase.includes("awesome");
console.log(resultd)

let text = "Hello, JavaScript world!";
let result = text.includes("JavaScript", 7);

console.log(result);  // true

/**El método includes() solo devuelve un resultado de true o false. 
 * No proporciona información sobre dónde se encuentra la subcadena 
 * en la cadena ni cuántas veces ocurre. */

/** otros métodos, como el método indexOf() podrían ser más adecuados. */


/******************************************************************** */
/** Como sustraer una subcadena de una cadena  */
/******************************************************************** */

/**El método slice() te permite extraer una porción de una cadena y 
 * devuelve una nueva cadena, sin modificar la cadena original. 
 * Toma dos parámetros: el índice de inicio y el índice de 
 * fin opcional. */

let message = "Hello, world!";
let greeting = message.slice(0, 5);
let greeting2 = message.slice(7)

console.log(greeting);  // Hello
console.log(greeting2);
//El método slice() es una herramienta poderosa para extraer partes de una 
// cadena en JavaScript.


let text2 = "JavaScript is awesome!";
let result3 = text2.slice(0, 9);

console.log(result3);