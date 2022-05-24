let car = {
    type: 'SUV',
}

if(car.type == 'SUV') {
    car.sunroof = true;
    car.doors = 4;
} else if (car.type == 'sport') {
    car.doors = 2;
    car.motor = 'turbo'
}


car.accelerate = function() {
    console.log(`Vrummm!`);
}


console.log(car)

car.accelerate();