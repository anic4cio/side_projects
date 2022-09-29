// first way to make an array on typescript
const fruits: string[] = ['Banana', 'Strawberry', 'Pinapple'];

// another way make it
let numbers: Array<number> = [1,2,3,4,5];

console.log(fruits); // ['Banana', 'Strawberry', 'Pineapple']
console.log(numbers) // [1,2,3,4,5]

let cat1: [string, number] = ['Karina', 29];
let cat2: [number, string] = [30, 'Danny'];

let yourself: {
    name: string, 
    age: number
} = {
    name: 'Albano', 
    age: 50
};

console.log(yourself); // { name: 'Albano', age: 50 }