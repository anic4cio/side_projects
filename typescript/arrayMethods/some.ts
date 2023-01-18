// with some() method we can check if at least a single item pass through test, if yes it will return true otherwise false:

// This function checks if a string argument is a name and lastname
const isPersonName = (name: string) => {
  const formatedName = name.trim().replace(/  +/g,  ' ')
  const regex = /[a-zA-Z] [a-zA-Z]+/
  return regex.test(formatedName)
}

const persons = ['Antônio Carlos', 'Almeida', '1080', 'false']

const hasPersonName = persons.some(isPersonName)
console.log(hasPersonName) // true

// Other function to check something in array, it check if at least one person is out of it IMC range:

const checkIMC = (weight: number, height: number) => {
  const squareHeight = height * height
  const imc = weight / squareHeight
  return imc > 26
}

const people = [
  { name: 'Karina Albuquerque', weight: 88, height: 1.72 },
  { name: 'Angela Lima', weight: 70, height: 1.60 },
  { name: 'Raquel Gonçalves', weight: 85, height: 1.65 },
  { name: 'Liandra Silva', weight: 60, height: 1.55 },
]

const hasPersonOutOfIMCRange = people.some(person => checkIMC(person.weight, person.height))
console.log(hasPersonOutOfIMCRange) // true
