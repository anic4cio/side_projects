let currentSpeed = prompt('What is the speed of the ship?')

let slowDown = (speed) => {
    while (speed > -1) {
        alert(`Current speed: ${speed} KM/s`)
        if (speed > 10) {
            speed -= 20
        } else if (speed < 20){
            alert(`The spaceship just arrived. Pilots are freed to get out!`)
            break
        }
    }
}

slowDown(currentSpeed)