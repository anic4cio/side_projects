const { createMachine, interpret } = require('xstate');

const traficLights = createMachine({
    predictableActionArguments: true,
    id: 'lights',
    initial: 'green',
    states: {
        green: { on: { lights: 'orange' } },
        orange: { on: { lights: 'red' } },
        red: { on: { lights: 'green' } }
    }
});

const lightsService = interpret(traficLights)
    .onTransition((state) => console.log(`Semaforo: ${state.value}`))

    .start();

lightsService.send("lights");
lightsService.send("lights");
lightsService.send("lights");
lightsService.send("lights");
lightsService.send("lights");
