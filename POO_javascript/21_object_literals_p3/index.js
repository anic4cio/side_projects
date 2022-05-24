// Com essa string da variával "t", posso reaproveitá-la em parâmetros diferentes
let t = 'typeOf'


let car = {
    [t + 'Car']: 'Sedan',
};


let boat = {
    [t + 'Boat']: 'Iate'
}


let plane = {
    [t + 'Plane']: 'Boeing'
}


console.log(boat)
console.log(plane)
console.log(car)


