// esse código faz a mesma coisa do arquivo http.js, porém utilizando o Express

// importa o express depois de instalado
const express = require('express')

//importa o meu modulo users.model
const UserModel = require('../src/models/user.model')

// instancia o express numa constante "app"
const app = express()

// faz o express reconhecer um json na requisição
app.use(express.json());

// EJS (View Engine)
app.set('view engine', 'ejs');
app.set('views', 'src/views')

app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({})
    res.render('index', { users }); 
});

// MIDDLEWARES (exibe informações do servidor ao estabelecer uma conexão)
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`);

    next();
});

// inicia o server com um h1 de html, no caminho home
app.get('/home', (req, res) => {
    res.status(200).send('<h1 style="color: #FF0000">DO YOU EVER REALIZED THERE IS HELL IN THE WORD HELLO?</h1>')
})

// adiciona um pagina ao servidor, users, com um objeto contendo informações
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users)

    } catch (error) {
        return res.status(500).send(error.message)
    }
});

// endpoint de listagem de um usuário por ID com GET
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id)
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).send(error.message)
    }
});

// criar usuário com POST
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);

    } catch (error) {
        res.status(500).send(error.message)
    }
})

// atualizar informações de usuário com PATCH
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// deletar um usuário com DELETE
app.delete('/users/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message)
    }
});


const port = 8080;

// mensagem de sucesso ao startar o server
app.listen(port, () => console.log(`Server running with Express at port ${port}`))