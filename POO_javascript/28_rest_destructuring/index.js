// "a" fica na posição 0, "b" fica na posição 1 e o resto num novo array dentro do array

let arr = [1,34,35,5,6,673,345,54,35,5,7,'fsg',36,'5636','hsd',660];

let [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

