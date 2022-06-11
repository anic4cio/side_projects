const fs = require('fs')

if(!fs.existsSync('./minhapasta')) { // checa de existe um diretório com esse nome no diretório atual

    console.log('Not Found!')
    fs.mkdirSync('minhapasta') // cria um diretório

} else if(fs.existsSync('./minhapasta')) {

    console.log('Found it!')
}

// rodar duas vezes para ver o resultado