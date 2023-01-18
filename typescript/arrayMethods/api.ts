import axios from 'axios'

interface User {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: object
  email: string
  login: object
  dob: {
    date: string
    age: number
  }
  registered: object
  phone: string
  cell: string
  id: object
  picture: object
  nat: string
}

// this function returns random data parsed a json object, with 10 users information
const getRandomUser = async () => {
  const response = await axios.get('https://randomuser.me/api/?results=10')
  const data = await response.data
  return data.results
}

const getFemales = async () => {
  const users = await getRandomUser()
  const onlyWomen: User[] = users.filter((user: User) => user.gender === 'female')
  console.log(onlyWomen)
}

const getAgeGreaterThan30 = async () => {
  const users = await getRandomUser()
  const ageds = users.filter((user: User) => user.dob.age > 30)
  console.log(ageds)
}

getAgeGreaterThan30()
