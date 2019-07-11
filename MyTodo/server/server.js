var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    request.setEncoding('utf-8');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader("Access-Control-Allow-Origin", "*");
    if (request.method == 'GET') {
        fs.readFile('data.txt', 'utf-8', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                response.write(data);
                response.end();
                console.log('读取数据');
            }
        });
    } else {
        let result = '';
        request.on('data', function (chunk) {
            result += chunk;
        });
        request.on('end', function () {
            let data = result.split('^');
            data = data.join('\r\n');
            fs.writeFile('data.txt', data, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('写入数据');
                }
            });
        });
    }
}).listen(8001);