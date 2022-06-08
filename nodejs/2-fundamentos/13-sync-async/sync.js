const fs = require('fs')

console.log('Início')

// no método síncrono, o file.txt é criado simultãneamente com o código
// porém de forma ordenada. O console.log('fim') é excecutado após a criação do file.txt
fs.writeFileSync('file.txt', 'oi')

console.log('Fim')