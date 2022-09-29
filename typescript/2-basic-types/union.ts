function union(x: number | string, y: number | string) {
  if (typeof x === 'number' && typeof y === 'number') {
      return x + y;
  }
  if (typeof x === 'string' && typeof y === 'string') {
      return x.concat(' ', y);
  }
  throw new Error('Parameters must be numbers or strings');
}
console.log(union('First', 'Second'));  // "onetwo"
console.log(union(1, 2));               // 3
console.log(union('one', 2));           // Returns error

// Literal type - string

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    // Valid
myResult = "pass";          // Valid
myResult = "failure";       // Invalid