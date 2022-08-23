const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => { 
        const error = false;
        if(error) {
            return onError(new Error('Error in login!'))
        }

        console.log(`Login success!\nEmail: ${email} - Password: ${password}`)
        onSuccess({ email, password })
    }, 1500);
}

const getUserElements = (email, callback) => {
    setTimeout(() => {
        callback(['element1', 'element2', 'element3'])
    }, 2000);
}

const user = loginUser(
    'felipe@email.com',
    '1234',
    (returnOfFunction) => {
        getUserElements(returnOfFunction.email, (elements) => {
            console.log({elements});
        });
    },
    (error) => {
        console.log(error)
    }
);