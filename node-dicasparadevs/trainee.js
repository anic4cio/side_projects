class Try {
    constructor(theBest) {
        this.theBest = theBest
    }
    
    sayTheBest = () => {
        console.log(`The best bike of the world is the ${this.theBest} ever!`)
    }

    bestToRide = () => {
        console.log(`${this.theBest}??? OMG! Amazing!`)
    }
}

const gs = new Try('Versys 1000')
gs.sayTheBest()

const xt = new Try('XT')
xt.bestToRide()