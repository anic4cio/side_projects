const findDigits = (n: number): number => {
  let digit: string[] = n.toString().split('');
  let counter: number = 0;

  digit.forEach(element => {
    if (n % Number(element) === 0) counter += 1
  })
  return counter
}

console.log(findDigits(12)); // 2
console.log(findDigits(1012)); // 3