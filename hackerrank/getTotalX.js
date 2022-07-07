function getTotalX(a, b) {

    let validCount = 0;
    
    for (let x = 1; x <= 100; x++) {
        if (a.every(int => (x % int == 0))) {
            if (b.every(int => (int % x == 0))) {
                validCount++;
            }
        }
    }

    return validCount;
}

let a = [2,6];
let b = [24,36];

console.log(getTotalX(a, b))