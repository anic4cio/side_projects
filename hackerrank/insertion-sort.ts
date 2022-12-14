const insertionSort1 = (n: number, arr: number[]): void => {
  const target = arr[n - 1]
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > target) {
      arr[i + 1] = arr[i]
      console.log(arr.join(' '))
    } else if(arr[i] < target) {
      arr[i + 1] = target
      console.log(arr.join(' '))
      break
    }
  }
}

const arr = [2, 4, 6, 8, 3]

insertionSort1(arr.length, arr)
