function timeConversion(s) {

    let ampm = s.substring(8);
    let hourNumber = s.substring(0,2); 

    if(ampm === 'PM' && hourNumber != '12') {
        hourNumber = Number(hourNumber) + 12
        var newTime = String(hourNumber) + s.substring(2)
        newTime = newTime.substring(0,8);
    } else if(hourNumber != '00') {
        var newTime = s.substring(0,8);
    }
    
    if(hourNumber === '12' && ampm === 'AM') {
        newTime = `00${s.substring(2,8)}`
    }

    return newTime
}

let time = '12:45:15AM'

console.log(timeConversion(time));