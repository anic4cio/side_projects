// importação do módulo inquirer, para otimizar o input
const inquirer = require('inquirer')

// estrutura de input, são passadas dessas forma em arrays com objetos dentro
// name: 'nome da pergunta' e message: 'pergunta em si'
inquirer.prompt([
    {
        name: 'p1', 
        message: 'Primeira nota: ',
    },
    {
        name: 'p2',
        message: 'Segunda nota: '
    },

    // o .then() excecuta as perguntas
]).then((pergunta) => {
    console.log(pergunta)
    const media = ((parseInt(pergunta.p1) + parseInt(pergunta.p2)) / 2)
    console.log(`Media: ${media}`)

    // o .catch é para erros, printando-os na tecla com o console.log()
}).catch(err => console.log(err))
