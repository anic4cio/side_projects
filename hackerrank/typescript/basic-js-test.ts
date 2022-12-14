/*
get a number as argument e iterate it,
then print the word instead number if it satisfied
*/

function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if(i % 3 !== 0 && i % 5 !== 0) {
      console.log(i)
    } else if(i % 3 === 0) {
      console.log('Fizz')
    } else if(i % 5 === 0) {
      console.log('Buzz')
    } 
  }
}

let num: number = 15;
fizzBuzz(num);