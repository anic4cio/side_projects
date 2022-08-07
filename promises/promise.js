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

// then chaining (Encadeamento de then)

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
        return data.toLowerCase()
    })
    .then((lowerString) => { // é possível encadiar vários thens
        console.log(lowerString) // user vinicius successfully found (caixa baixa)
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
})
// -----------------------------------------------------------------

// resolve promises with RACE (só aparece a promise que ganha a corrida)

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Four ok! Timeout')
    }, 2000)
});

const promiseFive = new Promise((resolve, reject) => { // Winner
    resolve('Promise Five ok!')
});

const promiseSix = new Promise((resolve, reject) => {
    resolve('Promise Three ok!')
});

const resolveAllRace = Promise.race([promiseFour, promiseFive, promiseSix]).then((data) => {
    console.log(data);
})
// -----------------------------------------------------------------

