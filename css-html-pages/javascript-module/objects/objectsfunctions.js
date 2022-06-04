var shipNameVar = prompt('Spaceship Name: ')
var typeVar = prompt('Spaceship type of: ')
var maxSpeedVar = prompt('Maximum speed: ')
var option = prompt('Enter number 1 to speed up\nEnter number 2 to stop.\n(Numbers only)')
var increaseSpeedVar

var spaceship = {
    shipName: shipNameVar,
    type: typeVar,
    maxSpeed: maxSpeedVar,
    currentSpeed: 0,
    increaseSpeed: increaseSpeedVar
}


while(option != '1' || option != '2') {
    if(option == '1') {
        increaseSpeedVar = Number(prompt('Speed to accelerate: '))
        spaceship.increaseSpeed = increaseSpeedVar
        speedUp()
        option = prompt('Enter number 1 to speed up\nEnter number 2 to stop.\n(Numbers only)')       
    } else if(option == '2') {
        stopShip()
        break
    } else { option = prompt('Invalid option. Try again\n[1] - Speed up\n[2] - Stop out') }
}


function speedUp() {
    if((spaceship.increaseSpeed - 1) >= (spaceship.maxSpeed - spaceship.currentSpeed)) {
        alert(`This speed parameter will reach the maximum speed!\nCurrent speed: ${spaceship.currentSpeed}KM/s\nMaximum Speed: ${spaceship.maxSpeed}KM/s`)
    } else { spaceship.currentSpeed += spaceship.increaseSpeed }
}


function stopShip() {
    alert(`Name: ${spaceship.shipName}\nType: ${spaceship.type}\nSpeed: ${spaceship.currentSpeed}KM/s\nMaximum speed: ${spaceship.maxSpeed}KM/s`)
}
