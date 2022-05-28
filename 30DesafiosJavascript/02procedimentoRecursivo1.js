 function chunkCall(num) {
    if (num == 0) {
        return null
    }
    if (num == 1) {
        return 'chunk'
    } else {
        return 'chunk-' + chunkCall(num - 1)
    }
}

console.log(chunkCall(4));
console.log(chunkCall(1));
console.log(chunkCall(8));
console.log(chunkCall(2));