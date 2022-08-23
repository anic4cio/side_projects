const urlAll = "http://swapi.dev/api/people/1";

fetch(urlAll)
    .then(res => {
        res.json().then(data => {
            const chars = data.results;

            return chars.map(char => {
                const ul = document.getElementById('info');
                const li = document.getElementById('li');
                const h4 = document.getElementById('h4');
                h4.innerHTML = `${char.name}`;
                ul.appendChild(li);
                li.appendChild(h4);
            })
        })
    })
    .catch(err => console.log(`Information not found!`, err));