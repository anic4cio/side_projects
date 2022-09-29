function printName(obj: {name: string, age: number}) {
    console.log(`This person named ${obj.name} is ${obj.age} years old.`);
}

let person1 = {name: 'Vinicius', age: 27};
printName(person1); // This person named Vinicius is 27 years old.

let person2 = {name: "Amanda", age: 21};
printName(person2); // This person named Amanda is 21 years old.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

interface WriteHello {
    Name: string;
    Age: number;
    SayHi(): string;
}

const bobMyFriend: WriteHello = {
    Name: 'Bob',
    Age: 25,
    SayHi(): string {
        return`Hi, I\'m ${bobMyFriend.Name} and I\'m ${bobMyFriend.Age} years old!`
    },
}

console.log(bobMyFriend.SayHi());

// Interface?
interface iPerson {
    Name: string;
    Nickname: string;
    Balance?: number;
}

class PhysicPerson implements iPerson {
    Name: string;
    Nickname: string;
    Balance?: number;
    constructor(public name: string, public nickname: string, public balance?: number) {
        this.Name = name
        this.Nickname = nickname
        this.Balance = balance
    }
}

class Account {
    addAccountPerson(profile: iPerson) {
        if(!profile.Balance) profile.Balance = 0
        console.log(`Account profile: ${profile.Name}`);
        console.log(`Account nickname: ${profile.Nickname}`);
        console.log(`Balance amount: ${profile.Balance}`);
    }
}

let client = new PhysicPerson('Mike', 'Cooperfield', 1000);
let accountInfo = new Account();
accountInfo.addAccountPerson(client);

let myClient = new PhysicPerson('Johan', 'Thusmackin');
let myAccount = new Account();
myAccount.addAccountPerson(myClient);