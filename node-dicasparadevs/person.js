class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `What's up, Dude! I'm ${this.name}!`
    }
}

module.exports = {
    Person,
};