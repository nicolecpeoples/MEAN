// ------- config ----------

var express = require('express');
var path = require('path');

var app = express();
//set up our view engine which adds the file extension to our views (ejs)
app.set('view engine', 'ejs');
//set up views folder to retrieve any views we want to render
app.set('views', path.join(__dirname, './views'));


//--- Routes --
app.get('/', function(req, res){ 
	res.render('index');
})

// ---- open connection -------
var server = app.listen(8000, function(){
	console.log("listening on 8000");
})

var chatHistory = [];
// ---- sockets ------
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	console.log("client connected");

	socket.on('username', function(data){
		console.log(data);
		socket.broadcast.emit('newusername', data);
		socket.emit('all_messages', {chatHistory: chatHistory});
	})

	socket.on('addmessage', function(data){
		console.log(data);
		chatHistory.push(data);
		io.emit('newMessageReceived', data);	
	})

})

