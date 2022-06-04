let departureDateEntry = prompt('Enter the travel date (DD/MM/YYYY)')
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
let today = moment()
let dateDiff = today - departureDate
let choseOption = prompt('Chose how to show the date time\n1 - Seconds\n2 - Minutes\n3 - Hours\n4 - Days')

if(choseOption == 1) {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert(`Flying time: ${secondsOfDeparture} seconds`)
} else if (choseOption == 2) {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60) 
    alert(`Flying time: ${minutesOfDeparture} minutes`)
}  else if (choseOption == 3) {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600) 
    alert(`Flying time: ${hoursOfDeparture} hours`)
}  else if (choseOption == 4) {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24) 
    alert(`Flying time: ${daysOfDeparture} days`)
} else {
    alert('Invalid option!')
}