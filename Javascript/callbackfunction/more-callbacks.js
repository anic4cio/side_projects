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

const getElementsDetails = (element, callback) => {
    setTimeout(() => {
        callback({detail: '**Element details**'})
    }, 2500);
}

const user = loginUser(
    'felipe@email.com',
    '1234',
    (returnOfFunction) => {
        getUserElements(returnOfFunction.email, (elements) => {
            console.log(elements);
            getElementsDetails(element[0], (elementDetails) => {
                console.log({elementDetails});
            });
            console.log({elements});
        });
    },
    (error) => {
        console.log(error)
    }
);