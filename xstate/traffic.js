const {createMachine} = require('xstate');

const lightMachine = createMachine({
    predictableActionArguments: true,
    id: 'light',
    initial: 'green',
    states: {
        green: {
            on: {
                TIMER: { target: 'yellow' }
            }
        },
        yellow: {
            on: {
                TIMER: { target: 'red'}
            }
        },
        red: {
            initial: 'walk',
            states: {
                walk: {
                    // console.log(`walk`)
                },
                wait: {
                    // console.log(`wait`)
                },
                stop: {
                    // console.log(`stop`)
                }
            },
            on: {
                TIMER: [
                    {
                        target: 'green',
                        in: '#light.red.stop'
                    }
                ]
            }
        }
    }
});