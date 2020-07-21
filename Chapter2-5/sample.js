var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req,res) {
    var urlParts = url.parse(req.url);
    var path = __dirname +'/' + urlParts.pathname;
    console.log(path);
    var stream = fs.createReadStream(path);
    stream.pipe(res);
});

server.listen(3000);
console.log('Server has started.');