// Conversão de Tipos ou Coersão de Tipos
// Type Convertion ou Coercion

// O nome se tornou autoexplicativo depois que eu entendi o que é conversão de tipos
// Existem vários tipos de variáveis, número, string, boolean, etc
// Esses tipos podem ser convertidos de forma implícita, indireta, automática
// O explícita, forçada, direta. Exemplos:

// Conversão Explícita
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let numberOne = 10
console.log(numberOne); // 10
// numberOne é tipo Number

numberOne = 'dez'
console.log(numberOne); // "dez"
// numberOne é tipo String

// Conversão Implítita
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let result = 200
let hundred = '100';
result += hundred;
console.log(result); // 200100

// result começou como Number, ao fazer a operação de soma com uma String
// result se tornou uma String, isso foi uma conversão de tipo implícita

// TESTES ESQUIZOFRÊNICOS SOBRE CONVERSÃO DE TIPOS

console.log('5' - 5);
console.log('5' + 5);
console.log(true + 1);
console.log(true + true);
console.log([] + {});
console.log([] + []);

// implicit
console.log(+ '5');
console.log(5 + '');
console.log(123 && 'oi');
console.log(null || true);

// explicit
console.log(Number('50'));
console.log(String(50));

// Conversão explícita de String pra Boolean
let yy = 'false';
console.log(typeof(yy)); // string
yy = Boolean(yy)
console.log(typeof(yy)); // boolean