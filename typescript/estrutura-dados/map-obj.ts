const myBikes = new Map<number, string>()

myBikes.set(1, 'XT660')
myBikes.set(2, 'CBR1000')
myBikes.set(3, 'CBR600')
myBikes.set(4, 'Lander')

console.log(myBikes)

const trail = myBikes.get(1)

console.log(myBikes.size)
