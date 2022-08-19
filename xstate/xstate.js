const { createMachine, interpret } = require('xstate');

const toggleMachine = createMachine({
    predictableActionArguments: true,
    id: 'toggle',
    initial: 'inactive',
    states: {
        inactive: { on: { TOGGLE: 'active' } },
        active: { on: { TOGGLE: 'inactive' } }
    }
});

const toggleService = interpret(toggleMachine)
    .onTransition((state) => console.log(state.value))
    .start();

toggleService.send('TOGGLE')

toggleService.send('TOGGLE');