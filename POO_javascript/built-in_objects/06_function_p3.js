let bigTrail = {
    model: 'big trail',
    engine: 1250,
    color: 'blue',
    sayTheModel() {
        console.log(`The bike model is ${this.color} ${this.model} with ${this.engine}CC`)
    }
}

let speed = {
    model: 'speed',
    engine: 600,
    color: 'red'
}

let custom = {
    model: 'custom',
    engine: 1800,
    color: 'black'
}

let trail = {
    model: 'trail',
    engine: 450,
    color: 'white'
}

bigTrail.sayTheModel.call(speed);
bigTrail.sayTheModel.call(custom);
bigTrail.sayTheModel.call(trail);