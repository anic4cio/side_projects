let o1 = {};
let o2 = new Object();
// o objeto "o2" vem da classe Prototype Object

console.log(o1);
console.log(o2);

o1.name = 'Matheus';
o2.name = 'Anderson';

console.log(o1.valueOf());
console.log(o2.valueOf());

console.log(o1.toString());
console.log(o2.toString());