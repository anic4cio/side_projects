let ninja = {
    class: 'professional',
    weapon: 'shuriken',
    useWeapon: function() {
        console.log(`${this.weapon} is used.`)
    },
    useTwoTimes: function() {
        // Chama useWeapon() duas vezes
        for(let i = 2; i > 0; i--) {
            this.useWeapon();
        }
    }
}

let ninja2 = {
    class: 'professional',
    weapon: 'kunai',
    useWeapon: function() {
        console.log(`${this.weapon} is used.`)
    }
}

ninja.useWeapon();
ninja2.useWeapon();

ninja.useTwoTimes();