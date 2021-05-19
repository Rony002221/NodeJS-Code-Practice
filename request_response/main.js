var http = require('http');

var server =  http.createServer(function (req, res){

    if(req.url == "/")
    {
        res.writeHead(200,{"content-type": "text/html"})
        res.write('<h1><u> This is Home Page </u></h1>')
        res.end();
    }
    else if(req.url == "/profile")
    {
        res.writeHead(200,{"content-type": "text/html"})
        res.write('<h1><u> This is Profile Page </u></h1>')
        res.end();
    }

    else if(req.url == "/contact")
    {
        res.writeHead(200,{"content-type": "text/html"})
        res.write('<h1><u> This is Contact Page </u></h1>')
        res.end();
    }
});

server.listen(4000);

console.log("Server running successfully !!")