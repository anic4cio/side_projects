function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    
    arr.forEach(element => {
        if(element > max) {
            max = element;
        } else if (element < min) {
            min = element;
        }
    });
    let sumMin = (arr.reduce((a, b) => a + b)) - max
    let sumMax = (arr.reduce((a, b) => a + b)) - min
    
    return sumMin + " " + sumMax
}

arr = [1,2,3,4,5];

console.log(minMax(arr));