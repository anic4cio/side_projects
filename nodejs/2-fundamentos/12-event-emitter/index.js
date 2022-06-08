const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// o event emitter funciona como uma function
// o event chama a funcão passada no .on() e executa quando chamamos .emit()
eventEmitter.on('start', () => {
    console.log('Durante')
})

console.log('Antes')

eventEmitter.emit('start') // aqui chama o evento

console.log('Depois')

// Antes
// Durante
// Depois