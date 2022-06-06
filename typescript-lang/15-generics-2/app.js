function identity(arg) {
    console.log(typeof arg);
    return "return of a string: ".concat(arg.toString());
}
console.log(identity('cavalo de tróia')); // string
console.log(identity(5)); // 5
console.log(identity(true)); // true
