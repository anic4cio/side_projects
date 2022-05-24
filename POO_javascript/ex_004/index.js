let ninja = {
    ninjaName: 'Naruto',
    weapon: 'Shuriken',
    quantity: 7,
    useWeapon() {
        if (this.quantity == 0) {
            console.log(`No shurikens.`)
        } else {
            console.log(`${this.ninjaName} used ${this.weapon}! ${this.weapon}s remain: ${this.quantity}`)
            this.quantity -= 1
        }
    }
};


ninja.useWeapon();
ninja.useWeapon();
ninja.useWeapon();
ninja.useWeapon();
ninja.useWeapon();
ninja.useWeapon();
ninja.useWeapon();
ninja.useWeapon();