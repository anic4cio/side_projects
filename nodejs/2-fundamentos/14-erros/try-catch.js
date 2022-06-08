const x = 10

// esse método em que o erro não encerra o código
try {
    x = 2
} catch(err) {
    console.log(`Erro: ${err}`) // Erro: TypeError: Assignment to constant variable.
}