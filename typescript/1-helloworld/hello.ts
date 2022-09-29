function helloWorld(
    person: string, 
    lastname: string, 
    age: number, working: 
    boolean
    ) {
    return `Say hello world to ${person} ${lastname}!
        His age is ${age}, he\'s working now? R: ${working}!`
}

const firstName: string = 'Vinicius';
const lastName: string = 'Anicácio';
const personAge: number = 24; 
const isWorking = true;

console.log(helloWorld(firstName, lastName, personAge, isWorking));