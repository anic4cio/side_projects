function Multitypes(bool, num, str) {
    this.bool = bool,
    this.num = num,
    this.str = str
};


let seila = new Multitypes(true, 35, 'average');

console.log(seila);


let multobj = {
    bool: false,
    num: 43,
    str: 'soft'
};

console.log(multobj);