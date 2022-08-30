const request = require('request');
const axios = require('axios');
const gitHubApi = 'https://api.github.com/users/anic4cio/repos'

// apesar do request já estar defasado e ser verboso em relação ao axios, vou deixar esse bloco como exemplo.
// esse "body" retorna um json gigante com as informação dos meus repositórios, o "JSON.parse()" formata essa string para json

request(gitHubApi, {'headers': {'User-Agent': 'nodejs'}}, (err, res, body) => {
    console.log(JSON.parse(body));
});

// o axios.get() retorma uma promise, ao colocar o .then com console.log podemos ver os dados dessa promise

axios.get(gitHubApi)
    .then(res => console.log(res));

// essa é a forma usando await, onde o await "faz o papel" do .then e podemos atribuir à uma variável
// Immediately Invoked Function Expression (IIFE) - é necessário usar essa técnica esquizofrênica para conseguirmos usar o await fora de uma função

(async() => {
    const res = await axios.get(gitHubApi)
    console.log(res);
})();
