const isCousinPrime = (num: number) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

// I simply DO NOT understand why this is not working:
// The array isCousinPrimeExist is not equal to cousins array, but it should be equal, because all numbers in cousins array are cousin primes.

const cousins = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const isCousinPrimeExist: number[] = cousins.filter((num: number) => {
  if (isCousinPrime(num)) return num
})
// 
console.log(isCousinPrimeExist) // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]
console.log(cousins)            // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]
console.log(isCousinPrimeExist === cousins) // false

// I am not sure if this is a bug or I am doing something wrong.

//  WHY THIS IS FALSE?

// I FOUND THE SOLUTION:
// 1. I have to use JSON.stringify() to compare arrays

console.log(JSON.stringify(isCousinPrimeExist) === JSON.stringify(cousins)) // true

// EXPLANATION:

// The reason why this is false is because arrays are objects, and objects are compared by reference, not by value.
// So, when you compare two arrays, you are actually comparing if they are the same object.
// Two different arrays can have the same values, but they are not equal, because they are not the same object.
// If you want to compare the values of two arrays, you have to convert them to strings and compare the strings.
// The JSON.stringify() method converts a JavaScript object or value to a JSON string.
// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.

/*
Comparisons between types
Internally, it .includes() makes a comparison through ===. However,
comparisons with === or == only work as expected (compare value) with the types:

Boolean
Null
Undefined
Number
String
Symbol (ES2015)

When we compare variables that reference the type object, the interpreter will test whether they point to the same object in memory.
*/