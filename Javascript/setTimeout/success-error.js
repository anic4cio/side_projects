const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => { 
        const error = false;
        if(error) {
            return onError(new Error('Error in login!'))
        }

        console.log(`Login success!\nEmail: ${email} - Password: ${password}`)
        onSuccess({ email, password })
    }, 1500);

    console.log('After setTimeOut...');
}

const user = loginUser('felipe@email.com', '1234', (returnOfFunction) => {
    console.log(returnOfFunction)
}, (error) => {
    console.log(error)
});