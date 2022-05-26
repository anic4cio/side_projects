let str = 'Vinicius';
let upper = str.toUpperCase();
let lower = str.toLowerCase();

console.log(upper); // VINICIUS
console.log(lower); // vinicius

let c = str.charAt(4);
let s = str.charAt(7);

console.log(c); // c
console.log(s); // s

console.log(lower.indexOf('ius')); // 5
console.log(upper.indexOf('V')) // 0
// retorna o index numérico da string