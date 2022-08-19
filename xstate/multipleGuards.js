const { createMachine, actions, interpret, assign } = require('xstate');

const doorMachine = createMachine(
  {
    predictableActionArguments: true,
    id: 'door',
    initial: 'closed',
    context: {
      level: 'user',
      alert: false // alert when intrusions happen
    },
    states: {
      closed: {
        initial: 'idle',
        states: {
          idle: {},
          error: {}
        },
        on: {
          SET_ADMIN: {
            actions: assign({ level: 'admin' })
          },
          SET_ALARM: {
            actions: assign({ alert: true })
          },
          OPEN: [
            // Transitions are tested one at a time.
            // The first valid transition will be taken.
            { target: 'opened', cond: 'isAdmin' },
            { target: '.error', cond: 'shouldAlert' },
            { target: '.idle' }
          ]
        }
      },
      opened: {
        on: {
          CLOSE: { target: 'closed' }
        }
      }
    }
  },
  {
    guards: {
      isAdmin: (context) => context.level === 'admin',
      shouldAlert: (context) => context.alert === true
    }
  }
);

const doorService = interpret(doorMachine)
  .onTransition((state) => console.log(state.value))
  .start();
// => { closed: 'idle' }

doorService.send({ type: 'OPEN' });
// => { closed: 'idle' }

doorService.send({ type: 'SET_ALARM' });
// => { closed: 'idle' }
// (state does not change, but context changes)

doorService.send({ type: 'OPEN' });
// => { closed: 'error' }

doorService.send({ type: 'SET_ADMIN' });
// => { closed: 'error' }
// (state does not change, but context changes)

doorService.send({ type: 'OPEN' });
// => 'opened'
// (since context.isAdmin === true)