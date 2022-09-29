const car: string = "Lamborghini Gallardo";
const wheels: number = 4;
const sunRoof: boolean = true;
const array: any | string[] = [];
const unknown: unknown = 'anything here 69';

console.log(car); // 'Lamborghini Gallardo'
console.log(wheels); // 4
console.log(sunRoof); // true
console.log(array); // []
console.log(unknown); // 'anything here 69


let tuple: [string, boolean, number];
tuple = ['hi', true, 10];
console.log(tuple); // [ 'hi', true, 10 ]


// Custom types
type tipo1 = string | number | boolean
type tipo2 = string | number 

let t: tipo1 
t = 'oi'
t = 7
t = false

let x: tipo2
x = 'ok'
x = 999

