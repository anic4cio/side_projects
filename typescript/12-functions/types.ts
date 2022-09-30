function carStats(brand: string, rims?: number) {
    if(rims) {
        console.log(`${brand} vehicle brand with ${rims}' rims size.`);
    } else {
        console.log(`Brand of vehicle: ${brand}.`);
    }
}

carStats('Porsche', 20); // Porsche vehicle brand with 20' rims size.
carStats('Alfa Romeo'); // Brand of vehicle: Alfa Romeo.

// BUILDING TYPED FUNCTIONS 

type calculator = (x:number, y: number) => number;

const add: calculator = (x: number, y: number) => x + y
const divide: calculator = (x: number, y: number) => x / y
const subtract: calculator = (x: number, y: number) => x - y
const multiply: calculator = (x: number, y: number) => x * y

console.log(add(24, 24));       // 48
console.log(divide(500, 6));    // 83.3 
console.log(subtract(1000, 999));  // 1
console.log(multiply(9, 10));   // 90

const calculate = (operation: 'add' | 'subtract'): calculator => {
    if(operation === 'add') {
        return add;
    } else {
        return subtract;
    }
}

console.log(calculate('add')(9, 9)); // 18
console.log(calculate('subtract')(9, 9)); // 0


// HOUSE BOULEVARD - SET ME FREE
/*
I was thinking of you
And the things you do
Time after time
You made me blue
Crying for help but now we're through

I was lost and despair
But now I knew
Memories remain
For you two searching for light
Everywhere I turn

Come on somebody come on
Rescue me
Come on somebody come on
Set me free
Come on somebody come on
Rescue me
Come on somebody come on

Set me free
Set me free
Set me free

I was thinking of you
And the things you do
Time after time
You made me blue
Crying for help but now we're through

I was lost and despair
But now I knew
Memories remain
For you two searching for light
Everywhere I turn

Come on somebody come on
Rescue me
Come on somebody come on
Set me free
Come on somebody come on
Rescue me
Come on somebody come on

Set me free
*/