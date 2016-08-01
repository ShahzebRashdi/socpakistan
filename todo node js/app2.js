var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 80;
var DATA = ["item 1","item 2","item 3"];

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

app.get('/getTodo', function (req, res) {
    res.send(DATA);
});

app.post('/setTodo', function (req, res) {
	var userjson = req.body;
	DATA = req.body;
	console.log(userjson);
} );

app.get('/time', function(req, res){
	res.send( {"time": Date.now()} );
});