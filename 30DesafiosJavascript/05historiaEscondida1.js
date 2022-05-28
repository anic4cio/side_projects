function decrypt(message) {
    let lastcharacter = message.toLowerCase().split('').sort().slice(-1).join();;
    return lastcharacter
}


console.log(decrypt('Loren ipsum dolore sec avanti'))
console.log(decrypt('Hello'))
console.log(decrypt('May the force be with you'))
console.log(decrypt('Its over nine thousand'))
console.log(decrypt('Zack is the must mischief child '))