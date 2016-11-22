var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World Zzz\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://localhost:3000/ ou http://127.0.0.1:3000/');
