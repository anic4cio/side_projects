// node-dependency-injection
// unhandledRejection
// uncaughtException

// O try-catch é tipo tentativa-erro, ele tenta executar um bloco de código
// Se der algum erro, joga o catch

function functionAttempt() {
    console.log('Function attempt triumphantly works!')
}

function failedFunction() {
    console.error('Catch runs! This error below error ocurred.');
}

try {
    functionAttempt()
    console.log('Try succeeded!');
} catch(error) {
    failedFunction()
    console.error(error)
}

console.log('Try-catch ends...')