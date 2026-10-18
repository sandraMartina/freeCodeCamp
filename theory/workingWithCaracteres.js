
    
//La notación de corchetes usa corchetes ([]) 
// y el índice del carácter que deseas acceder. Veamos un ejemplo
let greeting = "hello"; console.log(greeting[1]); // "e"
    



/* En muchos lenguajes de programación, incluido JavaScript, 
puedes crear una nueva línea en una cadena usando un carácter
 especial llamado secuencia de escape. 
 La secuencia de escape más común para nuevas líneas es \n.*/
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);




/* Si simplemente usas comillas dentro de una cadena sin escaparlas,
 puede causar un error porque JavaScript pensará que estás tratando 
 de terminar la cadena.

Por ejemplo, esto causará un error:*/

//let statement = "She said, "'Hello!'";
let statement = "She said, \"Hello!\"";




//**************************************** */
/**literales de plantilla y qué es la interpolación de strings */


const name = "Alice";
const GREETING = `Hello, ${name}!`;

console.log(GREETING);


const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const OUTPUT = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(OUTPUT); 


/******************************************************************** */
/**¿Cómo puedes encontrar la posición de una subcadena en una cadena? */


/**Para localizar la posición de una subcadena dentro de una
 *  cadena, puedes usar el método indexOf(). 
 * El método indexOf() en JavaScript te permite buscar 
 * una subcadena dentro de una cadena. */

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14

//Ahora, veamos qué sucede cuando la subcadena no se encuentra:

sentence = "JavaScript is awesome!";
position = sentence.indexOf("fantastic");
console.log(position); // -1
/**Usar indexOf() puede ser muy útil cuando necesitas 
 * verificar si una subcadena está presente en una 
 * cadena y determinar su posición para realizar 
 * operaciones adicionales.

 */






/****************************************************** */
/**¿Qué es el método prompt(), y cómo funciona? */

const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
  const userName = prompt("What is your name?", "Guest");
  output.textContent = `Hello, ${userName}!`;
});