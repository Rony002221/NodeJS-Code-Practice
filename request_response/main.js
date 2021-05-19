var http = require('http');

var server =  http.createServer(function (req, res){

    res.end("Hello world");
});

server.listen(4000);

console.log("Server running successfully !!")