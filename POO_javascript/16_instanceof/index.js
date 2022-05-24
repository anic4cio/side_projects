function createTree(type, hasFruit) {
    return {
        type: type,
        hasFruit: hasFruit
    }
}

let orangeTree = createTree('Orange Tree', true);
console.log(orangeTree);

function Hero(name, type) {
    this.name = name;
    this.type = type;
}

let jaspion = new Hero('Jaspion', 'Robot');
console.log(jaspion);

let arr = [];


console.log(orangeTree instanceof createTree)
console.log(orangeTree instanceof Object)
console.log(jaspion instanceof Hero)
console.log(arr instanceof Array)