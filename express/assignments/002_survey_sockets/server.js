var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

// This sets the location where express will look for the ejs views
app.set('views', path.join(__dirname, './views'));
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require("socket.io").listen(server);

io.sockets.on('connection', function(socket) {
	console.log("this is working");

	socket.on("posting_form", function (data){
		console.log("is this working? ", data);
		var randomNum = Math.floor(Math.random() * (1000-1)) + 1;
		console.log(randomNum);
	    socket.emit('updated_message', {response: data, lucky_number: randomNum});
	})
})