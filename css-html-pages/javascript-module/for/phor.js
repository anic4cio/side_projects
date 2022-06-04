let nameship = prompt('Which name do you wanna to cryptograph? (lowcase only)')
let oldCharacter = prompt('Now, which character do you wanna replace?')
let newCharacter = prompt('Enter new character to replace: ')
let newName = ''


for(let i = 0; i < nameship.length; i++) {
    if(nameship[i] == oldCharacter) {
        newName += newCharacter
    } else {
        newName += nameship[i]
    }
}
alert(newName)