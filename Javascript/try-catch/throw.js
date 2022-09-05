'use strict'

// var num

try {
    num = 10

    if(num > 10) {
        throw new Error('Invalid value! Number 10 at most is allowed.')
    }
    console.log('Try triumphantly succeeded!')

} catch (error) {
    console.error(`ERROR => ${error}`)
    console.log(error);
}

// O throw new Error faz exatamente o que ele diz que faz
// Joga um novo erro e só, a linha após o erro não é excecutada