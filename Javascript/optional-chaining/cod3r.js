// O conceito de optional chaining não serve para ignorar uma chave de objeto caso não haja essa chave
// Mas sim, para retornar undefined nessa query ao invés de dar -> TypeError: Cannot read properties of undefined (reading 'intake')

const vehicle = {
    type: 'rider',
    color: 'blue',
    wheel: {
        color: 'black',
        rim: 18,
        tire: 295,
        composition: {
            pure: 'aluminium',
            extra: 'plastic'
        }
    },
    motor: {
        cilinders: 6,
        type: 'line',
        turbo: {
            turbocompresson: 'SB95',
            composition: 'titanium',
            pipe: {
                shape: 'c-pipe',
                diameter: '13\'',
                polished: true,
                intake: {
                    compose: 'carbon',
                    position: 'tranversal',
                    coneShape: false,
                    code: {
                        made: 'china',
                        idCode: 'uytd3-79ew1-da94vl'
                    }
                }
            }
        },
        filter: {
            brand: 'K&N',
            sport: true,
            flux: 'counter-clock wise',
            color: 'red'
        }
    }
};

console.log(vehicle.motor.turbo.pipe.intake.code); // { made: 'china', idCode: 'uytd3-79ew1-da94vl' }
console.log(vehicle?.motor?.turbo?.pipe?.intake?.code?.idCode); // uytd3-79ew1-da94vl
console.log(vehicle.motor.turbo.pipe.intake.code?.made); // china
console.log(vehicle.motor?.filter?.air?.flux); // undefined

// No último caso, como não tem objeto com nome "air", ele retorna undefined