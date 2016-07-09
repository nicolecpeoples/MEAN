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

app.get('/result', function(req, res) {
 res.render("result");
})

app.post('/result', function(req, res){

	console.log(req.body);
	res.render("result", {info: req.body});
	// res.render('result', {info: req.body});
})


app.listen(8000, function() {
 console.log("listening on port 8000");
});