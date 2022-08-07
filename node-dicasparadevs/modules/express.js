// esse código faz a mesma coisa do arquivo http.js, porém utilizando o Express

// importa o express depois de instalado
const express = require('express')

// instancia o express numa constante "app"
const app = express()

// inicia o server com um h1 de html, no caminho home
app.get('/home', (req, res) => {
    res.status(200).send('<h1 style="color: #FF0000">DO YOU EVER REALIZED THERE IS HELL IN THE WORD HELLO?</h1>')
})

// adiciona um pagina ao servidor, users, com um objeto contendo informações
app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Jordan Stirling',
            email: 'jordan@email.com'
        },
        {
            name: 'Sônia Shumacher',
            email: 'sonia@email.com'
        }
    ]

    res.status(200).json(users);
})

const port = 8080;

// mensagem de sucesso ao startar o server
app.listen(port, () => console.log(`Server running with Express at port ${port}`))