// lodash em dependencies
const _ = require('lodash')

// chalk em devDependencies
const chalk = require('chalk')

const a = [1,3,5,7,9]
const b = [0,2,4,6,8]

const diff = _.difference(a, b)

// tem que instalar uma versão específica do chalk para rodar
// npm i chalk@4.1.2

// print em negrito na cor vermelha
console.log(chalk.red.bold(diff))



// a tag --save-dev deixa as dependência em um departamento separado
