
if(typeof Array.prototype.checkLength !== 'function') {
    Array.prototype.checkLength = function() {
        return this.length
    }
}

// não use esse método cara, pode haver problemas se o javascript for atualizado e implementar uma função de mesmo nome que a sua

if(typeof Array.prototype.checkLength !== 'functon') {
    Array.prototype.firstPlusLast = function() {
        return this[0] + this[this.length - 1];
    }
}

let arr = [90, 80, 75, 20, 3];

let arr2 = [5, 15, 79];

console.log(arr.checkLength()); // 5
console.log(arr2.checkLength()); // 3

console.log(arr.firstPlusLast()); // 93
console.log(arr2.firstPlusLast()); // 84
