function migratoryBirds(arr = []) {
    let birdsQty = 0;
    let sortedArr = arr.sort();
    for(let element = 0; element >= arr.length; element++) {

        if (sortedArr.filter(item => item == element).length > birdsQty) {
            birdsQty = element;
        }
    };
    return birdsQty
}

// Está falhando em metade dos testes

const birds = [6, 6, 6, 1, 4, 4, 4, 5, 3];

console.log(migratoryBirds(birds));