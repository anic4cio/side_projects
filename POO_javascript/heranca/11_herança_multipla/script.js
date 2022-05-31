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

function multi() {
    let n = {}, stuff, j = 0, len = arguments.length;
    for(j = 0; j < len; j++) {
        stuff = arguments[j];
        for(let i in stuff) {
            if(stuff.hasOwnProperty(i)) {
                n[i] = stuff[i];
            }
        }
    }
    return n;
}

let tire = {material: 'rubber'};

let rim = {size: 20};

let structure = {wire: '2mm'};

let wheel = multi(tire, rim, structure);

console.log(wheel);