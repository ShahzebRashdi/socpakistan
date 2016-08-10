var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var messages = [];
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

io.on('connection', function(socket){
	for(var x = 0; x < messages.length ; x++) {
		socket.emit('chat message', messages[x]);
	}

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    messages.push(msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});