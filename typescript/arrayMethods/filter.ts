// filter array method returns a new array with all elements that pass the test implemented by the provided function.

const randomArrayNumber = [7, 10, 2, 5, 7, 10, 2, 5]
const filteredArray = randomArrayNumber.filter((num, index, randomArrayNumber) => randomArrayNumber.indexOf(num) === index)
console.log(filteredArray) // [ 7, 10, 2, 5 ]

// with filter() you can for example remove all falsy values from an array, like this:

const randomValues = ['', ' ', {}, 0, 97, '0', 'false', false, true, 'true', null, undefined, NaN]
const filteredValues = randomValues.filter(Boolean) // Boolean is a function that returns true for any value that is not falsy
console.log(filteredValues) // [ ' ', {}, 97, '0', 'false', true, 'true' ]

console.log(Boolean(0)) // false
console.log(Boolean(' ')) // true
