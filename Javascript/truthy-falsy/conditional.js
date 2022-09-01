const tenere = 'Tenere 250'; // true / truthy

if(tenere) {
    console.log(`Most realiable and nice motorbike!`)
}

const kasisnki = ''; // false / falsy

if(kasisnki) {
    console.log(`Nice low CC speeder bike!`)
} else {
    console.log(`Bro? WTF?`)
}


if([]) {
    console.log(`[] é truthy`)
}

if({}) {
    console.log('{} também é truthy')
}

