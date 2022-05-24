const robot = {
    arms: 4, 
    legs: 2,
    gun: 'Rifle',
    specialGun: 'Rocket',
    shoot: function() {
        console.log('Pew pew!')
    }
}

robot.shoot()


let person = {
    name: 'Vinicius',
    age: 23,
    speak: function() {
        console.log(`${this.name} is speaking!`)
    }
}

person.speak()