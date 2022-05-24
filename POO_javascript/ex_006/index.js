function Fruits(fruit, color) {
    this.fruit = fruit,
    this.color = color
};

let strawberry = new Fruits('Strawberry', 'red');
let lemon = new Fruits('Lemon', 'green');
let banana = new Fruits('Banana', 'yellow');

let orange = {fruit: 'Orange', color: 'orange'};

function verifyInstance(obj1, obj2) {
    result = (obj1 instanceof obj2);
    if (result == true) {
        console.log(`${obj1.fruit} is an instance of ${obj2.name}.`);
    } else {
        console.log(`${obj1.fruit} is NOT an insance of ${obj2.name}.`);
    }
}

verifyInstance(strawberry, Fruits);
verifyInstance(lemon, Fruits);
verifyInstance(banana, Fruits);
verifyInstance(orange, Fruits);
