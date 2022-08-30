const axios = require('axios');
const giturl = user => `https://api.github.com/users/${user}/repos`;

// executar três promises pode feito de várias formas e essas formas tem performance diferente entre si

// essa é a forma mais rápida, usando o promise.all
(async() => {
    console.time()
    const promis1 = axios.get(giturl('anic4cio'));
    const promis2 = axios.get(giturl('rmanguinho'));
    const promis3 = axios.get(giturl('akivinicius'));
    await Promise.all([promis1.status, promis2.status, promis3.status])
    console.timeEnd()
})();

// também é possível fazer uma iteração como forEach, porém usar o async-await dentro de um forEach faz com que ele excecute primeiro o que está embaixo. 
// se caso dependermos de informações do forEach para o código debaixo ser executado de forma correta, podemos ter problemas.
(async() => {
    const users = ['anic4cio', 'rmanguinho', 'akivinicius'];

    console.time()

    users.forEach(async user => {
        const res = await axios.get(giturl(user))
        console.log(res.status);
    })

    console.timeEnd()
})();

// se repetirmos esse bloco usando o for, seu comportamento vai ser diferente do forEach. Consequentemente sua performance também vai ser diferente
// dessa forma, o timeend só é executado depois do for. Essa forma é um pouco mais lenta, mas respeita a estrutura de dados
(async() => {
    const users = ['anic4cio', 'rmanguinho', 'akivinicius'];

    console.time();

    for(const user of users) {
        const res = await axios.get(giturl(user));
        console.log(res.status);
    }

    console.timeEnd();
})();