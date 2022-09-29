let randomValue: unknown = 10;
console.log(randomValue);  // 10

randomValue = true;
console.log(randomValue);  // true

randomValue = 'Mateo';

try {
  console.log(randomValue.toUpperCase()) // MATEO
  // (Compile) error: Property 'toUpperCase' does not exist on type 'unknown'
} catch (err) {
  console.error(err);
}

let allowedStringMethods = 'Any string';
allowedStringMethods = allowedStringMethods.toUpperCase();
console.log(allowedStringMethods); // ANY STRING
