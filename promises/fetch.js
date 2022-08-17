// Fetch request na API do GitHub
// Fetch API

const username = 'anic4cio'

// Esse link abre um json contendo todas as informações do perfil no github
fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {Accept: 'application/vnd.github.v3+json'}
}).then((response) => {

    console.log(typeof response);
    console.log(response);
    return response.json()

}).then((data) => {

    console.log(data);
    console.log(`The name is ${data.name} and ${data.login} as a username.`);

}).catch((err) => {
    console.log(`An error has occurred: ${err}`);
});
