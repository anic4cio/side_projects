function extend(Son, Father) {
    let fatherProto = Father.prototype;
    let sonProto = Son.prototype;
    for(let i in fatherProto) {
        sonProto[i] = fatherProto[i];
    }
    // filho tem acesso ao objeto do pai
    sonProto.uber = fatherProto;
}

function objectClone(o, stuff) {
    let n;
    function F() {}
    F.prototype = o;
    n = new F();
    n.uber = o;
    for(let i in stuff) {
        n[i] = stuff[i];
    }
    return n;
}

function Vehicle() {
    this.frame = 'steel';
    this.itens = ['sunroof','armor', 'turbo engine'];
    this.turnon = function() {
        console.log('hihihi vrummm')
    }
}

function Train(type) {
    this.type = type;
    this.wagon = 60;
}

function Car() {
    this.tire = 4;
}

let v = new Vehicle;

let train = objectClone(v, {
    type: 'train',
    wagon: 60,
}) 

train.itens.push('fume window')

console.log(train)