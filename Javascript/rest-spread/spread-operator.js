// O spread operator serve para manipulação de arrays, para uní-los e formar um só

const alpha = ['a', 'b', 'c'];
const bravo = ['d', 'e', 'f'];

console.log(alpha, bravo); // [ 'a', 'b', 'c' ] [ 'd', 'e', 'f' ]

console.log(...alpha, ...bravo); // a b c d e f

console.log({alpha, ...bravo}); // { '0': 'd', '1': 'e', '2': 'f', alpha: [ 'a', 'b', 'c' ] } ????????????

console.log(alpha, ...bravo); // [ 'a', 'b', 'c' ] d e f

console.log([...alpha, ...bravo]); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


const firsts = [1, 2, 3];
const lasts = [7, 8, 9];

console.log(...firsts, 4, 5, 6, ...lasts); // 1 2 3 4 5 6 7 8 9