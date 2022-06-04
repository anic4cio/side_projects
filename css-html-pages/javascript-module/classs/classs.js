let spaceshipList = []
let chosenOption

class Spaceship {
    constructor(name, tripulants) {
        this.name = name
        this.tripulants = tripulants
        this.isHitched = false
        this.openDoors = false
    }  
    register() {
        this.isHitched = true
        this.openDoors = true
    }
}

function showMenu() {
    let menuOption
    while(menuOption != '1' && menuOption != '2' && menuOption != '3') {
        menuOption = prompt('Choose your option:\n[1] - Register new spaceship\n[2] - Print hitched spaceships\n[3] - Exit')
    }
    return menuOption
}

function registerSpaceship() {
    let spaceshipName = prompt('Name of the spaceship: ')
    let crewNumber = prompt('Number of crew members: ')
    let newSpaceship = new Spaceship(spaceshipName, crewNumber)
    return newSpaceship
}

function printSpaceships(spaceships) {
    let printSpaceshiplist = ''
    spaceships.forEach((spaceship, index) => {
        printSpaceshiplist += `Spaceship ${index + 1}: ${spaceship.name} (${spaceship.tripulants} crew members)\n`
    })
    alert(printSpaceshiplist)
}

while(chosenOption != '3') {
    chosenOption = showMenu()
    switch(chosenOption) {
        case '1':
            let readySpaceship = registerSpaceship()
            readySpaceship.register()
            spaceshipList.push(readySpaceship) 
            break
        case '2':
            printSpaceships(spaceshipList)
            break
    }
}
