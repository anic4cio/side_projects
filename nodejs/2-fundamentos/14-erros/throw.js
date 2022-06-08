const x = '10'

// checa se x é um number
if(!Number.isInteger(x)) {
    throw new Error('X não é um número inteiro') // vai dar um erro, mas é um erro proposital kkkk
}

console.log('continuando...')