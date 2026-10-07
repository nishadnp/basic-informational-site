const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8080;

const server = http.createServer((req, res) => {
    let page;

    switch(req.url) {
        case '/': 
            page = 'index.html';
            break;
        case '/about':
            page = 'about.html';
            break;
        case '/contact-me':
            page = 'contact-me.html'
            break;
        default: 
            page = '404.html';
            break;
    }

    const filePath = path.join(__dirname, page);

    const statusCode = page === '404.html' ? 404 : 200;

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type' : 'text/plain' });
            res.end('500 Internal Server Error');
            return;
        }

        res.writeHead(statusCode, { 'Content-Type': 'text/html'});
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});