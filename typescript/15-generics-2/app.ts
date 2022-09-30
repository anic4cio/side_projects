function identity<T>(arg: T): string {
    console.log(typeof arg);
    return `return of a string: ${arg.toString()}`;
}

console.log(identity<string>('cavalo de tróia')); // string return of a string: cavalo de tróia
console.log(identity<number>(5)); // number return of a string: 5
console.log(identity<boolean>(true)); // boolean return of a string: true