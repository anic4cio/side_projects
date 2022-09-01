const axios = require('axios');
const swapiPeople = 'https://swapi.dev/api/people/2/'

axios.get(swapiPeople).then((resp) => console.log(resp.data));

async function getStarship(id) {
    await axios.get(`https://swapi.dev/api/starships/${id}/`)
        .then(resp => console.log(resp.data))
}

const person = getStarship(2);

// fazendo uma requisição a uma API do Star Wars, ela retorna JSON's com informações sobre elementos do filme