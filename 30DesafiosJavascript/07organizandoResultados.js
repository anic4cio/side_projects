function joinArrays(array) {
    var split = [];

    array.forEach(element => {
        split.push(...element)
    });


    split.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    


    return split
}

console.log(joinArrays([[1,5,3], [6,19,11], [47,128,5], [1, 93, 57, 42, 103] ]))
console.log(joinArrays([[1,3], [4, 8], [7,5], [2,6]]))
console.log(joinArrays([[], [], [], []]))
console.log(joinArrays([[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]]))