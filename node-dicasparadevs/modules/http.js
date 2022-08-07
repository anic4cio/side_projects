const http = require('http')

const port = 8080;

const server = http.createServer((req, res) => {
    if(req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1 style="color: #ffae00">HOME PAGE</h1>');
    }

    if(req.url === '/users') {
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

        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Listening at port ${port}`))