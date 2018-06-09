'use strict';
var fs = require('fs');
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);
