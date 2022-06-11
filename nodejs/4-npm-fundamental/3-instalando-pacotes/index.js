const _ = require('lodash')

const a = [1,4,6,7,9,8]
const b = [2,3,5,8,7,4]

// diferência dos dois arrays
const diff = _.difference(a, b) // [ 1, 6, 9 ]

console.log(diff)