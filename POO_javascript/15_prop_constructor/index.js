function createTree(type, hasFruit) {
    return {
        type: type,
        hasFruit: hasFruit
    }
}

let orangeTree = createTree('Orange Tree', true);

console.log(orangeTree);
console.log(orangeTree.constructor);

function Hero(name, type) {
    this.name = name;
    this.type = type;
}

let jaspion = new Hero('Jaspion', 'Robot');

console.log(jaspion);
console.log(jaspion.constructor);

let obj = {
    teste: 'teste'
}

console.log(obj.constructor)