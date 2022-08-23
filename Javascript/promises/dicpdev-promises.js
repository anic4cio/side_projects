const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) {
            reject(new Error('Login error!'))
        }

        console.log('Login successful!');
        resolve({ email })
    });
}

const getUserElements = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUserElements');
            resolve(['element1', 'element2', 'element3'])
        }, 2000);
    });
}

const getElementsDetails = (element) => {
    return new Promise((resolve, reject) => {
        console.log('getElementsDetails');
        setTimeout(() => {
            resolve({detail: '**Element details**'})
        }, 2500);
    });
}

loginUser('rubronegro@email.com', '12345')
    .then((user) => getUserElements(user.email))
    .then((element) => getElementsDetails(element[0]))
    .catch((error) => console.log({ error }))


