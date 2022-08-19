// Guarded Transitions

const { createMachine } = require('xstate');

const searchValid = (context, event => {
    return context.canSearch && event.query && event.query.lengh > 0;
});

const seatchMachine = createMachine(
    {
        id: 'seach',
        initial: 'idle',
        contex: {
            canSearch: true
        },
        states: {
            idle: {
                on: {
                    SEARCH: [
                        {
                            target: 'searching',
                            cond: searchValid
                        },
                        { target: '.invalid'}
                    ]
                },
                initial: 'normal',
                states: {
                    normal: {},
                    invalid: {}
                }
            },
            searching: {
                entry: 'excecuteSearch'
            },
            searchError: {

            }
        }
    },
    {
        guards: {
            searchValid
        }
    }
)