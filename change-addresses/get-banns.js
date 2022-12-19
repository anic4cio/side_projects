const axios = require('axios')
const Bluebird = require('bluebird')
const fs = require('fs')

// banns id from 0 to 14350
// const iterateAtBanns = async maxId =>
//   await Bluebird.map(getPostToWordpress(maxId), { concurrency: 35 })

const makeObj = (id, meta) => {
  return { id, meta  }
}

const getPostToWordpress = async maxId => {
  const allposted = []
  const req = {
    baseUrl: process.env.API_URL,
    username: process.env.API_USER,
    password: process.env.API_KEY,
  }
  for (let id = 14280; id <= maxId; id++) {
    try {
      const postedBann = await axios.get(`${req.baseUrl}/wp/v2/edital/${id}`, {
        auth: { username: req.username, password: req.password },
      })
      const obj = makeObj(postedBann.data.id, postedBann.data.meta)
      allposted.push(obj)
      console.log('OK', postedBann.data.id)
    } catch (error) {
      console.log(`${error.response.statusText}`, id)
    }
  }
  const jsonBuffer = Buffer.from(JSON.stringify(allposted))
  fs.writeFileSync('posted.json', jsonBuffer)
  return allposted.length
}

const see = async () => {
  const posted = await getPostToWordpress(14300)
  console.log(posted)
}

see()
