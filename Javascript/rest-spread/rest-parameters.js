// rest parameters diz respeito a parâmetros de quantidade indefinida
// o rest parameters coloca os valores em um array

const manyParams = (...rest) => {
    console.log(rest);
}

manyParams(1, 9, 'Shove it', true); // [ 1, 9, 'Shove it', true ]
manyParams('5'); // [ '5' ]
manyParams(10); // [ 10 ]
manyParams(false, true); //  [ false, true ]
manyParams(9 * 5); // [ 45 ]
manyParams(17 + 43 + 9 + ' é quase ' + 70); // [ '69 é quase 70' ]


function displayThings(typeOfThing, ...thingsName) {
    console.log(`Quantity of ${typeOfThing}: ${thingsName.length}`)
    thingsName.forEach(element => {
        console.log(`${element}`)
    });
};

displayThings('cars', 'Accord', 'Renegade', 'Skyline', 'Diablo', 'Civic', 'RS6')
// Quantity of cars: 6
// Accord
// Renegade
// Skyline
// Diablo
// Civic
// RS6