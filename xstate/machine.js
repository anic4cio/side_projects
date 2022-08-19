const { createMachine, interpret } = require('xstate');

const promiseMachine = createMachine({
    predictableActionArguments: true,
    id: 'promise',
    initial: 'pending',
    states: {
        pending: {
            on: {
                RESOLVE: { target: 'resolved' },
                REJECT: { target: 'rejected' }
            }
        }, 
        resolved: {
            type: 'final'
        },
        rejected: {
            type: 'final'
        }
    }
});

const promiseService = interpret(promiseMachine)
    .onTransition((state) => {
        console.log(`State of Machine:${state.value}`)
});

promiseService.start();

promiseService.send({ type: 'RESOLVE' });
// promiseService.send({ type: 'REJECT' });
