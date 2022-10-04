const permutationEquation = (p: number[]): number[] => {
  let array: number[] = [];
  let index: number;
  for (let i = 0; i <= p.length; i++ ) {
    p.forEach(element => {
      if (p.indexOf(i) +1 === element) {
        index = p.indexOf(element) +1
        array.push(index);
      }
    })
  }
  return array
}

const p: number[] = [5, 2, 1, 3, 4]; // [ 4, 2, 5, 1, 3 ]
console.log(permutationEquation(p));