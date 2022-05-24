
function Ninja(ninjaName, weapon) {
    this.ninjaName = ninjaName,
    this.weapon = weapon,
    this.useWeapon = function () {
        console.log(`${this.ninjaName} used ${this.weapon}`)
    }
};

let naruto = new Ninja('Naruto', 'Kunai');

let hinata = new Ninja('Hinata', 'Shuriken');

naruto.useWeapon();
hinata.useWeapon();