const { createMachine } = require('xstate');
const triggerMachine = createMachine(
    {
        predictableActionArguments: true,   
        id: 'trigger',
        initial: 'inactive',
        states: {
            inactive: {
                on: { TRIGGER: { target: 'active', actions: ['activate', 'sendTelemetry'] } }
            },
            active: { 
                entry: ['notifyActive', 'sendTelemetry'], 
                exit: ['notifyInactive', 'sendTelemetry'],
                on: { STOP: { target: 'inactive' } }
            }
        }
    },
    {
        actions: {
            activate: (context, event) => { console.log('activating...') },
            notifyActive: (context, event) => { console.log('active!') },
            notifyInactive: (context, event) => { console.log('inactive!')},
            sendTelemetry: (context, event) => { console.log('time:', Date.now())}
        }
    }
);