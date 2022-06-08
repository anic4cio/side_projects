const minimist = require('minimist')

//
const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const idade = args['idade']

// node ./index.js --nome=Vinicius --idade=23
console.log(`${nome} tem ${idade} anos de idade`)

// este módulo minimist fazer exatamente a mesma coisa que na ultima pasta 4-ler-argumentos
// porém de uma forma simplificada
// é necessário passar os parâmetros no terminal com dois traços --