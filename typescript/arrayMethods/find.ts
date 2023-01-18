// with find() method jest return first element that matches the condition:

const alumnis = [
  { name: 'John', id: 20 },
  { name: 'Jane', id: 30 },
  { name: 'Jill', id: 35 },
  { name: 'Jack', id: 40 },
  { name: 'Vinicius', id: 45 },
]

const findAlumni = alumnis.find((alumni) => alumni.id === 45)
console.log(findAlumni) // { name: 'Vinicius', id: 45 }

// another simple example:

const isMe = (name: string) => name.toLowerCase().includes('vinicius')

const personNames = [ 'Amaro', 'Andréia', 'Jó', 'Vinicius', 'Marildo' ]

const findPerson = personNames.find(isMe)
console.log(findPerson) // Vinicius

const vAsInitial = personNames.find(initial => initial.toLowerCase().startsWith('v'))
console.log(vAsInitial) // Vinicius
