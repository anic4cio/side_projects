function printName(obj: {name: string, age: number}) {
    console.log(`This person named ${obj.name} is ${obj.age} years old.`);
}

let person1 = {name: 'Vinicius', age: 27};

printName(person1); // This person named Vinicius is 27 years old.

let person2 = {name: "Amanda", age: 21};

printName(person2); // This person named Amanda is 21 years old.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Interface?
interface iPerson {
    Name: string;
    Nickname: string;
}

class PhysicPerson implements iPerson {
    Name: string;
    Nickname: string;
    constructor(public name: string, public nickname: string) {
        this.Name = name
        this.Nickname = nickname
    }
}

class Account {
    addAccountPerson(profile: iPerson) {
        console.log(profile.Name);
        console.log(profile.Nickname);
    }
}

let client = new PhysicPerson('Mike', 'Cooperfield');
let accountInfo = new Account();
accountInfo.addAccountPerson(client);