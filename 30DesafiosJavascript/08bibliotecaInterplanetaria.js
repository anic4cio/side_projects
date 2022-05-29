function initials(fullname) {
    let nameArr = fullname.split(' ');
    var nameInitials = [];

    for(namesIndex = nameArr.length-1; namesIndex >= 0; namesIndex--) {
        if(namesIndex == nameArr.length-1) {
            nameInitials.push(nameArr[namesIndex].toUpperCase());
        } else if(namesIndex >= 0) {
            let firstLetter = nameArr[namesIndex];
            nameInitials.push(firstLetter[0]);
        }
    }

    let upperLastName = `${nameInitials.shift()}, `
    nameInitials.reverse()

    nameInitials.forEach(letter => {
        upperLastName += `${letter}. `
    })

    return upperLastName.toUpperCase()
}


console.log(initials('Isaac Larrubia Ferreira Pontes')) // PONTES, I. L. F.
console.log(initials('John Ronald Reuel Tolkien')) // TOLKIEN, J. R. R.
console.log(initials('christopher james paolini')) // PAOLINI, C. J.
console.log(initials('Suzanne Marie Collins')) // COLLINS, S. M.
console.log(initials('Vinicius da Mata Anicácio'))  // ANICÁCIO, V. D. M.