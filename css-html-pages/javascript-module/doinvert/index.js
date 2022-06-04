let nameShip = prompt('What is the name to invert?')
let newName = ''
let nameLength = nameShip.length - 1

for(i = nameShip.length - 1; i >= 0; i--) {
    if (nameShip[i] == 'e') {
        break
    }
    newName += nameShip[i]
}

alert(newName)


// while(newName.length < nameShip.length) {
//     newName += nameShip[nameLength]
//     nameLength -= 1
//     if(nameShip[nameLength] == 'e') {
//         break
//     }
// }