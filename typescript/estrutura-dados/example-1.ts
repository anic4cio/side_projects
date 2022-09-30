const arr = [1, 1, 3, 14, 123, 53, 34, 63, 1, 745, 4, 56, 34, 5, 43, 3, 2]; 
let result = 0;

for(let i = 0; i < arr.length; i++) {
    result += arr[i]
}

console.log(arr.length); // length = 17
console.log(result);