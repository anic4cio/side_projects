function Ninja(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.useWeapon = function() {
        console.log(`${this.weapon} is used!`);
    }
}

let ninja1 = new Ninja('Naruto', 'shutriken');
console.log(ninja1.name);
ninja1.useWeapon();


let ninja2 = new Ninja('Sasuke', 'kunai');
console.log(ninja2.name);
ninja2.useWeapon();