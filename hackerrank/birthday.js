function birthday(s, d, m) {
    let count = 0;
    let index = m;
    let arrSum
    for(let i = 0; i <= s.length; i++) {
        if(m > 1) {

            arrSum = s.slice(i, index + i);
            if(arrSum.reduce((a, b) => a + b, 0) == d) {
                count += 1;
            }
            
        } else {
            count = 1;
        }
    }    
    return count;
}

let s = [1,2,6,1,2,5,2];
let d = 9;
let m = 3;

console.log(birthday(s, d, m));