// with reduce array method you can reduce an array to a single value, like this:

const wins = [
  { team: 'Liverpool', goals: 4 },
  { team: 'Manchester City', goals: 2 },
  { team: 'Manchester United', goals: 1 },
  { team: 'Real Madrid', goals: 3 },
  { team: 'Barcelona', goals: 1 },
  { team: 'Bayern Munich', goals: 2 },  
]

const totalGoals = wins.reduce((previous, current) => previous + current.goals, 0)
console.log(totalGoals) // 13

// You can also add a second argument to reduce, which is the initial value of the accumulator, like this:

const simplesNumbers = [1, 2, 3, 4] // sum = 10
const sum = simplesNumbers.reduce((previous, current) => previous + current, 100)
console.log(sum) // 110

// You can use reduce with strings, like this:

const names = ['John', 'Paul', 'George', 'Ringo']
const stringNames = names.reduce((previous, current) => previous + ' - ' + current, 'The Beatles')
console.log(stringNames) // The Beatles: JohnPaulGeorgeRingo