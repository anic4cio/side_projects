let car: string = "Lamborghini Gallardo";
let wheels: number = 4;
let sunRoof: boolean = true;

console.log(car); // Lamborghini Gallardo
console.log(wheels); // 4
console.log(sunRoof); // true


// Custom types

type tipo1 = string | number | boolean
type tipo2 = string | number 

let t: tipo1 | tipo2
t = 'oi'
t = false
t = 7