var express = require('express');
var app = express();
var port = 80;

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

app.get('/time', function(req, res){
	res.send( {"time": Date.now()} );
});