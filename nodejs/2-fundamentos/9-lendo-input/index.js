const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem preferida?  ', (lang) => {
    if(lang === 'HTML') {
        console.log(`${lang} nem é linguagem!`)
        readline.close()        
    } else if(lang === 'Java'){
        console.log(`${lang} cara? Gosta de sofrer hein`)
        readline.close()
    } else {
        console.log(`Linguagem preferida: ${lang}`)
        readline.close()
    }
})