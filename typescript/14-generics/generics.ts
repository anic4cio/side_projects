function identity<T>(arg: T): T {
    return arg;
}

console.log(identity('string')); // string
console.log(identity(5)); // 5
console.log(identity(true)); // true

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

const numArr = getArray<number>([99, 88, 77, 66]);
const strArr = getArray<string>(['super', 'twin', 'draco', 'leo']);
const boolArr = getArray<boolean>([false, true]);

const xquizo = getArray<string | number>([660, 'troia', 'horse']);
const okay = getArray<null | undefined | number>([null, undefined, 10]);

console.log(numArr);
console.log(strArr);
console.log(boolArr);
console.log(xquizo);
console.log(okay);