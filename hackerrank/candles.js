function candles(arr) {

    let max = Math.max.apply(Math, arr);
    let candles = 0;
    candles = arr.filter(x => x==max).length;

    return candles
}

let arr = [1,0,2,3,3];

console.log(candles(arr));