function Ninja(ninjaName, weapon, quantity) {
    this.ninjaName = ninjaName,
    this.weapon = weapon,
    this.quantity = quantity,
    this.useWeapon = function(enemy) {
        if(this.quantity == 0) {
            console.log(`No ${this.weapon}s remain.`)
        } else {
            console.log(`${this.ninjaName} used ${this.weapon}!`);
            this.quantity -= 1;
            enemy.live = false;
            console.log(`Enemy is dead!`);
        }
    }
}


function Enemy(enemyName) {
    this.enemyName = enemyName,
    this.live = true
}


let neji = new Ninja('Neji', 'biakugan', 3);
let gaara = new Enemy('Gaara');

neji.useWeapon(gaara);


console.log(gaara);
