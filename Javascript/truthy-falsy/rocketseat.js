// Truthy e Falsy é o valor boolean de uma variável

// Valores falsy:

0 ? console.log('truthy') : console.log('falsy') // número zero é falsy
0n ? console.log('truthy') : console.log('falsy') // zero BigInt é falsy
null ? console.log('truthy') : console.log('falsy') // null é falsy
undefined ? console.log('truthy') : console.log('falsy') // undefined é falsy
false ? console.log('truthy') : console.log('falsy') // false é falsy
NaN ? console.log('truthy') : console.log('falsy') // NaN é falsy
'' ? console.log('truthy') : console.log('falsy') // string vazia é falsy

// Esses são provalvemente todos os falores falsy

// Valores truthy

console.log("Alguns valores truthy")
true ? console.log("truthy") : console.log("falsy")  // true é truthy
({}) ? console.log("truthy") : console.log("falsy") // objeto vazio é truthy
([]) ? console.log("truthy") : console.log("falsy") // array vazio é truthy
1n ? console.log("truthy") : console.log("falsy") // 1n é truthy
17 ? console.log("truthy") : console.log("falsy") // número !== de 0 é truthy
new Date() ? console.log("truthy") : console.log("falsy") // objeto é truthy
3.4 ? console.log("truthy") : console.log("falsy") // número decimal é truthy
-99 ? console.log("truthy") : console.log("falsy") // número negativo é truthy
Infinity ? console.log("truthy") : console.log("falsy") // infinito positivo é truthy
-Infinity ? console.log("truthy") : console.log("falsy") // infinito negativo é truthy
"Rocketseat" ? console.log("truthy") : console.log("falsy") // String com valor é truthy
"🚀 💺" ? console.log("truthy") : console.log("falsy") // String não vazia é truthy
" " ? console.log("truthy") : console.log("falsy") // String com espaço em branco é truthy (cuidado)!

// IMPORTANTE! String vazia é falsy, mas String com espaço em branco é truthy
// O operador "!!" verifica se o valor comparado é falsy ou truthy

console.log(!!''); // false
console.log(!!' '); // true

// Se um usuário digitar um espaço em branco num form, pode quebrar a validação
console.log(!!' '.trim()); // false