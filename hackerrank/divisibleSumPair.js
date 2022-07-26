/**
Count the number of pairs in an array having sums
that are evenly divisible by a given number. 
**/

function divisibleSumPair(n, k, ar) {
    let pairs = 0;
    for(let one = 0; one < n; one++) {
        for(let two = one + 1; two < n; two++) {
            if((ar[one] + ar[two]) % k === 0) {
                pairs ++;
            }
        };
    };
    return pairs
}

let n = 100;
let k = 86;
let ar = [6,89,79,89,22,40,61,1,76,78,66,47,17,31,6,17,36,36,66,34,64,66,60,45,37,67,39,48,59,56,45,74,40,6,34,8,63,19,28,81,65,23,26,24,53,29,98,55,23,74,99,67,80,73,86,57,32,30,40,46,20,62,7,73,58,67,15,74,63,49,42,81,38,85,47,29,88,41,59,19,62,64,36,46,45,3,59,91,8,60,80,58,41,2,5,27,59,92,83,79];

console.log(divisibleSumPair(n, k, ar)); // 70
