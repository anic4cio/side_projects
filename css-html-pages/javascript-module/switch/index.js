let distance = prompt('What is the distance in light-year?')
let option = prompt('What is the final convertion? \n[1] - Parsec\n[2] - Astronomic Units\n[3] - Quilometers\nNumber only')

switch(option) {
    case "1":
        var convertedDistance = (distance * 0.306601)
        option = "Parsec"
        alert(`Light year distance: ${distance}\n${option} convertion: ${convertedDistance}`)
        break
    case "2":
        var convertedDistance = (distance * 63241.1)
        option = "Astronomic Units"
        alert(`Light year distance: ${distance}\n${option} convertion: ${convertedDistance}`)
        break
    case "3":
        var convertedDistance = (distance * (9.5 * Math.pow(10, 12)))
        option = "Quilometers"
        alert(`Light year distance: ${distance}\n${option} convertion: ${convertedDistance}`)
        break
    default:
        alert('Sorry. Out of scope.')
        
}

