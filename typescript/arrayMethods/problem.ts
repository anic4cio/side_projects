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