// Require the Express Module
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

//Create mongoose schemas
var UserSchema = new mongoose.Schema({
 user_name: String,
 user_age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
	console.log("in get");
	
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({}, function(err, users) {
    	if(err){
    		console.log('there are no users');
    	}
    	else {
    		res.render('index', {userinfo: users});
    	}
    // This is the method that finds all of the users from the database
    // Notice how the first parameter is the options for what to find and the second is the
    //   callback function that has an error (if any) and all of the users
    // Keep in mind that everything you want to do AFTER you get the users from the database must
    //   happen inside of this callback for it to be synchronous 
    // Make sure you handle the case when there is an error, as well as the case when there is no error
  })
    
})
// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
     var user = new User({user_name: req.body.user_name, user_age: req.body.user_age});
     // if there is an error console.log that something went wrong
     user.save(function(err){
     	if(err) {
     		console.log('something went wrong');

     	}
     	else {
     		console.log('successfully added a user!');
     		// This is where we would add the user from req.body to the database.
    		res.redirect('/');
     	}
     })
    
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})