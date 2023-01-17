// with every() method we can check if all elements in an array pass a test, it returns a boolean value, like this:

const checkEven = (num: number) => num % 2 === 0

const odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const isEven = odd.every(checkEven)
console.log(isEven) // false

const even = [2, 4, 6, 8, 10]
const isEven2 = even.every(checkEven)
console.log(isEven2) // true

// with every() you can also check if all elements in an array are of a certain type, like this:

const isNumber = odd.every((num) => typeof num === 'number')
console.log(isNumber) // true

// you can also check if a string is all uppercase, like this:

const isUpperCase = (str: string) => str === str.toUpperCase()

const upperCase = ['HELLO', 'WORLD']
const isUpperCase2 = upperCase.every(isUpperCase)
console.log(isUpperCase2) // true

const lowerCase = ['hello', 'world']
const isUpperCase3 = lowerCase.every(isUpperCase) 
console.log(isUpperCase3) // false

// Now, let see a real world example of every() method, like this:

const users = [
  { name: 'Angelita', age: 18 },
  { name: 'John', age: 30 },
  { name: 'Paul', age: 40 },
  { name: 'George', age: 50 },
  { name: 'Ringo', age: 60 },
]

const isAdult = users.every((user) => user.age >= 18)
console.log(isAdult) // true
