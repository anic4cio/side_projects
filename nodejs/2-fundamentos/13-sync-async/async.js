const fs = require('fs')

console.log('Início')

// neste caso o node não espera a função ser finalizada, ele prossegue com o código
// de forma que o arquivo aparece depois no fim do programa
fs.writeFile('file.txt', 'oi', function(err) {
    setTimeout(function() {
        console.log('Arquivo Criado')
    }, 1000)
})

console.log('Fim')