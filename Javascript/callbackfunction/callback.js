const loginUser = (email, password, callback) => {
    setTimeout(() => { 
        console.log('Login success!');
        console.log(`Email: ${email} - Password: ${password}`)
        callback({ email, password })
    }, 1500);

    console.log('After setTimeOut...');
}

const user = loginUser('felipe@email.com', '1234', (returnOfFunction) => {
    console.log(returnOfFunction)
});