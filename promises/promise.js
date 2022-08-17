// Criate promise

const firstPromise = new Promise((resolve, reject) => {
    const name = 'Vinicius'

    if(name === 'Vinicius') {
        resolve(`User ${name} successfully found.`)
    } else {
        reject(`User not found.`)
    }
});

firstPromise.then((data) => {
    console.log(data);
});
// -----------------------------------------------------------------

// then chaining (Encadeando vários then)

const secondPromise = new Promise((resolve, reject) => {
    const name = 'Vinicius'

    if(name === 'Vinicius') {
        resolve(`User ${name} successfully found.`)
    } else {
        reject(`User not found.`)
    }
});

secondPromise
    .then((data) => {
        return (data.toUpperCase())
    })
    .then((data) => { // é possível encadiar vários thens
        console.log(data.replace(/I/g, '1')) // USER V1N1C1US SUCCESSFULLY FOUND.
        // /<string>/g === global replace
    });
// -----------------------------------------------------------------

// catch return

const thirdPromise = new Promise((resolve, reject) => {
    const name = 'Viviany'

    if(name === 'Vinicius') {
        resolve(`User ${name} successfully found.`)
    } else {
        reject(`User not found.`)
    }
});

thirdPromise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(`An error occurred: ${err}`);
    });
// -----------------------------------------------------------------

// resolve various promises

const promiseOne = new Promise((resolve, reject) => {
    resolve('Promise One ok!')
});

const promiseTwo = new Promise((resolve, reject) => {
    resolve('Promise Two ok!')
});

const promiseThree = new Promise((resolve, reject) => {
    resolve('Promise Three ok!')
});

const resolveAll = Promise.all([promiseOne, promiseTwo, promiseThree]).then((data) => {
    console.log(data);
    data.forEach(element => {
        console.log(element)
    });
})
// -----------------------------------------------------------------

// resolve promises with RACE (só aparece a promise que ganha a corrida)

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Four ok! Timeout')
    }, 2000)
});

const promiseFive = new Promise((resolve, reject) => {
    resolve('Promise Five ok!')
});

const promiseSix = new Promise((resolve, reject) => {
    resolve('Promise Six ok!')
});

const resolveAllRace = Promise.race([promiseFour, promiseSix, promiseFive]).then((data) => {
    console.log(data);
})
// A ordem de excecução é definida pela ordem do array
// -----------------------------------------------------------------

