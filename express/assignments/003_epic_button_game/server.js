var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(8000, function() {
	console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	console.log("this is working");
	var counter = 0;

	socket.on('count_up', function(data){
		counter++;
		console.log(counter);

		socket.emit('counted', {counter: counter});
	})

	socket.on('reset_count', function(data) {
		counter = 0;
		socket.emit('counted', {counter: counter});
	})
})