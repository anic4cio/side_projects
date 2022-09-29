let randomValue: unknown = 10;
console.log(randomValue);  // 10

randomValue = true;
console.log(randomValue);  // true

randomValue = 'Mateo';
console.log((randomValue as string).toUpperCase()) // MATEO

let allowedStringMethods = 'Any string';
allowedStringMethods = allowedStringMethods.toUpperCase();
console.log(allowedStringMethods); // ANY STRING
