// first way to do an array on typescript
const fruits: string[] = ['Banana', 'Apple', 'Orange'];

// another way
let numbers: Array<number> = [1,2,3,4,5];

console.log(fruits); // ['Banana', 'Apple', 'Orange']
console.log(numbers) // [1,2,3,4,5]

let obj = {
    name: 'Vinicius',
    age: 29,
}

console.log(obj); // {name: 'Vinicius', age: 29}
console.log(obj.name); // Vinicius