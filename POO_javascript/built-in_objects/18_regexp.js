let word = new RegExp(/us/);

console.log(word.test('Goal')); // false

console.log(word.test('Spaceship')); // false

console.log(word.test('Vinicius')); // true

//.test() é um método do RegExp