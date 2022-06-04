let hitched = [ 
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
]

let nineCrewFunction = hitched.filter(element => { return element[1] > 8 })
let nineCrew = []
nineCrewFunction = nineCrewFunction.forEach(function(spaceship) {
nineCrew.push(spaceship[0])
})

let unhitched = hitched.findIndex(unhitchedShip => {
    return Number(unhitchedShip[2] == false)
})

let UpperCaseShipName = hitched.map(element => {
    return element[0].toUpperCase()
})

alert(`Spaceships with nine or more crews: ${nineCrew.join(', ')}\n
Plataform that's not still buttoned on: ${unhitched+1} \n
Highlighted spaceships: ${UpperCaseShipName.join(', ')}`)