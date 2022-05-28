function decrypt2(str) {
    let message = str.toLowerCase().split(' ');
    let reverseWord = [];
    let reverseMessage = [];
    let wordNumber = 0;
    while (message.length > reverseMessage.length) {
        let word = message[wordNumber];
        let cont = word.length-1;
        while (cont >= 0) {
            reverseWord.push(word[cont])
            cont--
        }
        wordNumber++
        reverseMessage.push(reverseWord.join(''));
        reverseWord = [];
    }            
    return reverseMessage.join(' ')    
}


console.log(decrypt2('Lorem ipsum dolore sec avanti'))
console.log(decrypt2('This is an apple'))
console.log(decrypt2('May the force be with you'))
console.log(decrypt2('It s over nine thousand'))

