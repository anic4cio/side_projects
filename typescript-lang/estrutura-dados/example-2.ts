const arr = [1, 1, 3, 14, 123, 76453, 34, 63, 1, 745, 4, 56, 34, 5, 43, 3, 2]; 

const foundElement = arr.find((value) => {
    console.log(value);
    return value > 5 && value < 16;
})

console.log(`Element found was: ${foundElement}`);