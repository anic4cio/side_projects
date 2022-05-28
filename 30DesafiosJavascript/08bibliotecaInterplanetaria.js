function initials(name) {
    let nameArr = name.split(' ');
    var initialsName = [];
    for(namesNumber = nameArr.length-1 ; namesNumber >= 0 ; namesNumber--) {
        if (namesNumber == nameArr.length-1) {
            initialsName.push(nameArr[namesNumber].toUpperCase());
        } else if(namesNumber >= 0) {
            let firstLetter = nameArr[namesNumber];
            initialsName.push(firstLetter.charAt(0));
        }
    }
    return initialsName
}


console.log(initials('Isaac Larrubia Ferreira Pontes'))
console.log(initials('John Ronald Reuel Tolkien'))
console.log(initials('Christopher James Paolini'))
console.log(initials('Suzanne Marie Collins'))