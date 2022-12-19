const findSum = (numbers, queries) => {
  const sums = [];
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    let sum = 0;
    for (let j = start; j <= end; j++) {
      sum += numbers[j];
      if(numbers[j] === 0) break;
    }
    sums.push(sum);
  }
  return sums;
}

const numbers = [5, 10, 10];
const queries = [[1, 2]];
console.log(findSum(numbers, queries));

