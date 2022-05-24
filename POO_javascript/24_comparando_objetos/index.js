let test = {
    a: 1,
} 

let test2 = {
    a: 1,
}

console.log(Object.is(test, test2)); // false

console.log(Object.is(NaN, NaN)); // true

console.log(NaN === NaN); // false

console.log(Object.is(+0, -0)); // false

console.log(+0 === -0); // true


let test3 = test;

console.log(Object.is(test3, test)); // true

console.log(test3 === test); // true