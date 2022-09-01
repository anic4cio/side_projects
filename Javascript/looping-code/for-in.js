const student = {name: 'Brad', lastName: 'Coperfield', note1: 90, note2: 95, age: 20}
const info = {...student}

// for in é pra objetos
for(let dado in student) {
    console.log(`${dado} -> ${student[dado]}`);
}

// for of é para arrays
const things = ['bike', 'freedom', 'vehicle', 'have fun', 'big woman'];

for(let item of things) {
    console.log(item);
}