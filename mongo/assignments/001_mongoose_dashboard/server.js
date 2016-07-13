// Require the Express Module
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dog_db');

//Create mongoose schemas
var DogSchema = new mongoose.Schema({
 dog_name: String,
 dog_breed: String,
 dog_age: Number
})
mongoose.model('Dog', DogSchema); // We are setting this Schema in our Models as 'User'
var Dog = mongoose.model('Dog') // We are retrieving this Schema from our Models, named 'User'

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

// Get Requests
app.get('/', function(req, res) {
       Dog.find({}, function(err, dogs) {
        if(!dogs){
            console.log("There are no dogs here");
        }
        else {
            res.render('index', {dogs: dogs});
        }
  })
})


app.get('/dogs/new', function(req, res) {
    
    res.render('new');
})

app.get('/dogs/:id', function(req, res) {
    Dog.findOne({_id: req.params.id}, function(err, dog) {
    if(err){
        console.log('dog does not exist');
     }
    else {
        console.log(dog);
        res.render('show', {dog: dog});
    }
    })
})


app.get('/dogs/:id/edit', function(req, res) {
    Dog.findOne({_id: req.params.id}, function(err, dog) {
    if(err){
        console.log('dog does not exist');
     }
    else {
        console.log(dog);
        res.render('update', {dog: dog});
    }
})
    
})

// Post Requests
// Add User Request 
app.post('/dogs', function(req, res) {
    console.log("POST DATA", req.body);
     var dog = new Dog({dog_name: req.body.dog_name, dog_breed: req.body.dog_breed, dog_age: req.body.dog_age});
     // if there is an error console.log that something went wrong
     dog.save(function(err){
     	if(err) {
     		console.log('something went wrong');

     	}
     	else {
     		console.log('successfully added a dog!');
     		// This is where we would add the user from req.body to the database.
    		res.redirect('/');
     	}
     })
    
})

app.post('/dogs/:id', function(req, res) {
    console.log("POST DATA", req.body);
     Dog.findOne({_id: req.params.id}, function(err, dog){
         dog.dog_name = req.body.dog_name,
         dog.dog_breed = req.body.dog_breed,
         dog.dog_age = req.body.dog_age
         dog.save(function(err){
             // if save was successful awesome!
        if(err) {
            console.log('something went wrong');

        }
        else {
            console.log('successfully edited dog!');
            // This is where we would add the user from req.body to the database.
            res.redirect('/');
        }
         })
        })
    
})

app.post('/dogs/:id/destroy', function(req, res) {
    console.log("i am in the destroy function");
    Dog.remove({_id: req.params.id}, function(err){
 // This code will run when the DB has attempted to remove all matching records to {}
    if(err){
        console.log("could not find that dog in our database");
        res.redirect('/');
    }
    else {
        console.log('successfully removed ');
        res.redirect('/');
    }
})
    
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})