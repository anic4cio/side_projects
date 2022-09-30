function identity<T>(arg: T): T {
    return arg;
}

console.log(identity('string')); // string
console.log(identity(5)); // 5
console.log(identity(true)); // true