const utopianTree = (n: number): number => {
  let height: number = 0;

  for (let i = 0; i <= n; i++) {
    height = i % 2 === 0 ? height += 1 : height *= 2
  }
  return height
}

console.log(utopianTree(0)); // 1
console.log(utopianTree(1)); // 2
console.log(utopianTree(2)); // 3
console.log(utopianTree(3)); // 6
console.log(utopianTree(4)); // 7
console.log(utopianTree(5)); // 14