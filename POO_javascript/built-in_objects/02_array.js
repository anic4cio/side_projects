let a = [0,1,2];
let b = new Array(3,4,5);

console.log(a);
console.log(b);

console.log(a.toString());
console.log(b.toString());

console.log(a instanceof Array); // true
console.log(b instanceof Array); // true
console.log(b instanceof Object); // true
console.log(Array instanceof Object); // true