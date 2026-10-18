// El primer tipo de dato que veremos es el tipo Number.

// Examples of integers
console.log(3);
console.log(5);
console.log(-67);

// Examples of floating point numbers
console.log(3.14);
console.log(7.2);
console.log(-14.5);


// El segundo dato que veremos es el tipo string.

console.log("I love sleep!");

//ejemplo usando comillas simples:
console.log('I love sleep!');

//Otro tipo de dato utilizado en JavaScript es el tipo Boolean
//dos valores: true o false. 


//Los siguientes dos tipos de datos en JavaScript son undefined y null.
//undefined significa que una variable ha sido declarada pero aún 
// no se le ha asignado un valor. 

//null significa que la variable ha sido intencionalmente establecida 
// en "nada" y no contiene ningún valor.



//Un Object es una colección de pares clave-valor.

{
  name: "Alice",
  age: 30
};

//Un Symbol es un tipo especial de valor en JavaScript que siempre 
// es único y no se puede cambiar. A menudo se utiliza para crear 
// etiquetas o identificadores únicos para propiedades:

Symbol('mySymbol');


//BigInt se utiliza para números muy grandes que exceden 
// el límite del tipo Number:

1234567890123456789012345678901234567890n;