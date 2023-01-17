const oddNumber = [7, 11, 13, 17, 19, 23]
const newNumbers = oddNumber.map((num) => num * 2)
console.log(newNumbers) // [ 14, 22, 26, 34, 38, 46 ]

// You can also use map to create a new array of objects, like this:

const kvArray = [
  { key: 1, value: 13 },
  { key: 2, value: 24 },
  { key: 3, value: 31 },
]
const newKv = kvArray.map((obj) => {
  return { key: obj.key, value: obj.value * 3 }
})
console.log(newKv) // [ { key: 1, value: 39 }, { key: 2, value: 72 }, { key: 3, value: 93 } ]


// You can also use a function as a argument to map, like this:

const oddNumbers = [7, 11, 13, 17, 19, 23]
const stringNumber = (num: number) => `Number: ${num}`
const newStringNumber = oddNumbers.map(stringNumber)
console.log(newStringNumber) // [ 'Number: 7', 'Number: 11', 'Number: 13', 'Number: 17', 'Number: 19', 'Number: 23' ]
