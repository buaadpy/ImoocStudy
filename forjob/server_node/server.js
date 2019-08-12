let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function (request, response) {
    //response.setHeader("Access-Control-Allow-Origin", "*");
    var pathname = url.parse(request.url).pathname;
    fs.readFile(pathname.substring(1), 'utf-8', function (err, data) {
        response.writeHeader(200, {
            'Content-Type': 'text/plain'
        })
        response.write(data.toString());
        response.end();
    })
}).listen(8001, '127.0.0.1', () => {
    console.log('端口号8001');
});