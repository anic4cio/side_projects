function migratoryBirds(arr = []) {
    let birdsQty = 0;
    arr.forEach((element) => {
        if (arr.filter(item => item == element).length > birdsQty && item >= element) {
            birdsQty = element;
        }
    });

    return birdsQty
}

const birds = [6, 6, 6, 1, 4, 4, 4, 5, 3];

// console.log(migratoryBirds(birds));
// console.log(birds.filter(item => item == 6));

