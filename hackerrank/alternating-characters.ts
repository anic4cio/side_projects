const alternatingCharacters = (characters: string): number => {
  const charArray = characters.split('')
  let deleted = 0
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === charArray[i + 1]) {
      deleted += 1
    }
  }
  return deleted
}

console.log(alternatingCharacters('AAABBB'))
console.log(alternatingCharacters('AAAA'))
console.log(alternatingCharacters('BBBBB'))
console.log(alternatingCharacters('ABABABAB'))
console.log(alternatingCharacters('BABABA'))
