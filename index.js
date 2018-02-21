var fs = require('fs');
var http = require('http');

console.log('Try localhost:3000 in your browser to connect to the server');

function readContent(callback) {
    fs.readFile("./index.html", 'utf-8', function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

readContent(function (err, content) {
    console.log(content)
})

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        response.write('<h1>It works!</h1>');
        response.end();
    } else {
        response.statusCode = 404;
        response.write('<img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/25489/image/pac-404.png" alt="404">');
        response.end();
    }
});

server.listen(3000);