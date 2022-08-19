const { createMachine, interpreter } = require("xstate");

const triggerMachine = createMachine (
    {
        predictableActionArguments: true,
        id: 'trigger',
        initial: 'inactive',
        states: {
            inactive: {
                on: {
                    TRIGGER: {
                        target: 'active',
                        actions: ['activate', 'sendTelemetry'],
                    }
                }
            },
            active: {
                entry: ['notifyActive', 'sendTelemetry'],
                exit: ['notifyInactive', 'sendTelemetry'],
                on: {
                    STOP: { target: 'inactive' }
                }
            }
        }
    },
    {
        actions: {
            activate: (ctx, evt) => {
                console.log('activating...')
            },
            notifyActive: (ctx, evt) => {
                console.log('active!');
            },
            notifyInactive: (ctx, evt) => {
                console.log('inactive!');
            },
            sendTelemetry: (ctx, evt) => {
                console.log('time', Date.now());
            }
        }
    }
);