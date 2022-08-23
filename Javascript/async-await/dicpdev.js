const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) {
            reject(new Error('Login error!'))
        }

        console.log('Login successful!');
        resolve({ email, password })
    });
}

const getUserElements = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(getUserElements);
            resolve(['element1', 'element2', 'element3'])
        }, 2000);
    });
}

const getElementsDetails = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(getElementsDetails);
            resolve({detail: '**Element details**'})
        }, 2500);
    });
}

const displayUser = async() => {
    try {
        const user = await loginUser('vic@email.com', '123');
        const elements = await getUserElements()
        const elementDetails = await getElementsDetails(elements[0])
    
        console.log([ user ]); // [ { email: 'vic@email.com', password: '123' } ]
    
        console.log([ elements ]); // [ [ 'element1', 'element2', 'element3' ] ]
    
        console.log([ elementDetails ]); // [ { detail: '**Element details**' } ]

    } catch(error) {
        console.log({ error });
    }
}

displayUser();
