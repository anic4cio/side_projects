Array.prototype.checkLength = function() {
    return this.length
}

Array.prototype.firstPlusLast = function() {
    return this[0] + this[this.length - 1];
}

// array com métodos personalizados

let arr = [90, 80, 75, 20, 3];

let arr2 = [5, 15, 79];

console.log(arr.checkLength()); // 5
console.log(arr2.checkLength()); // 3

console.log(arr.firstPlusLast()); // 93
console.log(arr2.firstPlusLast()); // 84
