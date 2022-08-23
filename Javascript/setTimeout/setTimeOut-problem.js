// A variável user guarda um objeto com email e senha.
// O Javascript executa o código sem esperar o final do setTimeOut e user fica undefined
// Depois retorna o resultado do setTimeOut

const loginUser = (email, password) => {
    setTimeout(() => { // 3̣° setTimeOut é executado
        console.log('Login success!');
        console.log(`Email: ${email} - Password: ${password}`)
        return { email, password }
    }, 1500);
}

const user = loginUser('felipe@email.com', '1234') // 1° Atribui undefined à variável user

console.log({user}); // 2° Escreve { user: undefined }