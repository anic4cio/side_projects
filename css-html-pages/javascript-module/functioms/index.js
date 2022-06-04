var shipName = prompt('What is the spaceship name?')
var shipSpeed = prompt('Set the velocity to go (Numbers only) KM/s: ')
var option

function decreaseSpeed() {
    if(shipSpeed < 5) {
        alert("You can't running down below 0KM/s")
    } else {
        shipSpeed -= 5
    }
}

function increaseSpeed() {
    // shipSpeed += 5
    shipSpeed = Number(shipSpeed) + 5
}

do {
    var option = prompt(`Choose option for ${shipName}\n[1] - Increase 5KM/s\n[2] - Decrease 5KM/s\n[3] - Show on-board data\n[4] - Turn off manager\nCurrent Speed: ${shipSpeed} KM/s`)
    if(option == '1') {
        increaseSpeed()
    } else if (option == '2') {
        decreaseSpeed()    
    } else if (option == '3') {
        alert(`Spaceship name: ${shipName}\nCurrent velocity: ${shipSpeed} KM/s`)
    } else if (option == '4') {
        alert('Shutting off speed manager...')
        break
    } else {
        alert('Invalid option. Set again: ')
    }
} while (option != '4')


// Se você setar a velocidade e colocar a opção 1, o programa vai concatenar o número da velocidade atual com o 5.
// Porém se você escolher a opção 2, o programa começa a funcionar normalmente até com a opção 1
// A opção 1 só concatena erroeamente na primeira vez, se for escolhida como primeira opção
// A opção 2 funciona normalmente
// O problema está comentado na função "increaseSpeed"