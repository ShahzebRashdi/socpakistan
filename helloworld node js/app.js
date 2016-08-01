var http = require('http'),
    fs = require("fs"),
    port = 80,
    url = 'http://localhost:' + port + '/';

var html;
// Asynchronous read
fs.readFile('index.html', function (err, data) {
    if (err) {
       return console.error(err);
    } 
    html = data;
});

var server = http.createServer(function(req, res) {
    //console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
});

server.listen(port);

console.log('The http server has started on port ' + port);
