let truck = {
    wheels: 26,
    color: 'black',
    motor: 'turbo 500',
    company: 'mercedes benz',
    axle: '8'
}

// let truckComponents = ({wheels, color, motor, company, alxe} = truck);
// Mó confusão, mas essa linha simplesmente copia o objeto para a variável truckComponents.

let {wheels, color, motor, company, alxe} = truck;

console.log(wheels);
console.log(color);
console.log(motor);
console.log(company);
console.log(alxe);
