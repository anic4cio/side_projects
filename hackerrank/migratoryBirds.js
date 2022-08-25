// "use strict"

function migratoryBirds(arr) {
    arr.sort().reverse();
    let target = 0;
    let occurrence = Math.max(...arr);
    let leng = 0
    let currentLeng = 0

    for(let i = 0; i <= arr.length; i++){
        target = arr.filter(x => x == arr[i]);
        leng = arr.filter(x => x == arr[i]).length;
        if (target[0] < occurrence && leng >= currentLeng) {
            currentLeng = leng
            occurrence = target[0] 
        }
    }
    return occurrence
}

// Está falhando em metade dos testes

const birds = [6, 6, 6, 1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(birds));