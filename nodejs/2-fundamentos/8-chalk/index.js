// npm i chalk@4.1.2
const chalk = require('chalk')

const nota = 5

if(nota >= 7) {
    console.log(chalk.green('Parabéns, aprovado!')) // letra verde
} else {
    console.log(chalk.bgRed.black('Sinto muito, reprovado!')) // fundo vermelho, letra preta
}

console.log(chalk.bold('Letra em negrito'))