
// Find how much numbers is diferent from the most frequent number of an array


const equalizeArray = (arr: number[]): number => {
  let maxCount: number = 0
  let maxFreq: number = 0
  let delet: number = 0
  for (let i = 0; i < arr.length; i++) {
    let count: number = 0
    arr.map(item => {
      if (item === arr[i]) {
        count++
      }
      if (count > maxCount) {
        maxCount = count
        maxFreq = arr[i]
      }
    })
  }
  arr.map(elem => {
    if (elem !== maxFreq) {
      delet++
    }
  })
  return delet
}

let arr1: number[] = [1, 9, 2, 1, 2] // Output: 3
let arr2: number[] = [2, 12, 1, 2, 8, 2, 2, 1, 8, 2] // Output: 3


console.log(equalizeArray(arr1))
console.log(equalizeArray(arr2))
