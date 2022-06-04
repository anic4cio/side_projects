let pilotName = prompt('What is your name?')
let speed = 0;
let pilotSpeed = prompt('Which velocity you wanna go?')
let confirmSpeed = confirm(`Confirm your speedship: ${pilotSpeed}kph`)
if(confirmSpeed) {speed = pilotSpeed}

if(speed <= 0) {
    alert("The ship isn't moving. Increase speed for the travel")
} else if(speed < 40) {
    alert("Your are going slowly. You can go faster.")
} else if (speed >= 40 && speed < 80) {
    alert("That looks a nice speed!")
} else if (speed >= 80 && speed < 100) {
    alert("Dangerously velocity, take care!")
} else {
    alert("Your speed is through the edge! Turning on automatic pilot.")
}

alert(`Pilot name: ${pilotName}\nShip velocity: ${speed} Kph`)
