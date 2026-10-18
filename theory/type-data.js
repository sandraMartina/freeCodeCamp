//Si necesitas agregar o adjuntar a una cadena existente, entonces puedes usar el operador +=. Esto es útil cuando deseas construir una cadena agregando más texto con el tiempo.
let message = "Welcome to programming, ";
message += "Asad!";
console.log(message); // Welcome to programming, Asad!


//Otra forma de concatenar cadenas es usar el método concat(). 
// Este método une dos o más cadenas.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName); // John Doe

//Los comentarios de varias líneas se crean 
// usando /* para iniciar el comentario y */ para finalizar el comentario.
/*
This is a multi-line comment.
It can span multiple lines.
*/