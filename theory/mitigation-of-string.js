/*
El método replace() 
en JavaScript te permite encontrar un valor
especificado (como una palabra o carácter) 
en una cadena y reemplazarlo con otro valor. 
*/


/* 
searchValue es el valor que quieres buscar en la cadena.
El newValue es el valor que reemplazará al searchValue. 

string.replace(searchValue, newValue);
*/

let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"


let sentence = "I enjoy working with JavaScript.";
console.log(sentence);  // "I enjoy working with JavaScript."
let updatedSentence = sentence.replace("javascript", "coding");
console.log(updatedSentence);  // "I enjoy working with JavaScript."


let phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase);  // "Hello, world! Welcome to the world of coding."
let updatedPhrase = phrase.replace("world", "universe");
console.log(updatedPhrase);  // "Hello, universe! Welcome to the world



/******************************************************* */
/***¿Cómo puedes repetir una cadena x número de veces? */

/***El método repeat() es una función incorporada en JavaScript 
 * que te permite repetir una cadena un número especificado de veces. */

let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"


let count = 4;
    word = "Test";
    repeatedWord = word.repeat(count);
console.log(repeatedWord); // TestTestTestTest