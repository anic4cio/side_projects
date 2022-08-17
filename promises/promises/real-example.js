const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)

// O primeiro then recebe os dados da variável url e converte para json
    .then((resp) => resp.json())
    .then((data) => {

        // Esse (data) é array com os objetos contidos no json
        console.log(data);

        // O map é como o forEach, ele percorre o array e o 'user' é o element
        return data.map((user) => {
            let li = document.createElement('li');
            li.innerHTML = `${user.address.street} (${user.name})`
            ul.appendChild(li)
        })
    })
    .catch((err) => {
        console.log(`Oops! ${err}`);
    })