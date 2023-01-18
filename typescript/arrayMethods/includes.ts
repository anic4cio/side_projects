// Well, the .includes() method is a method that returns a boolean value, it can used with array and string:

const dreamBikes = ['XT660', 'GS1250', 'S1000XR', 'Hayabusa', 'WR450', 'Super Duke']

const hasHayabusa = dreamBikes.includes('Hayabusa')
console.log(hasHayabusa) // true

// you can also add a argument to specify the index where the search will start:

const hasHayabusa2 = dreamBikes.includes('Hayabusa', 4)
console.log(hasHayabusa2) // false

// you can search for ANYTHING in an array:

console.log([1, 'two', NaN, undefined, null, true, false].includes(NaN)) // true

// c r a z y !