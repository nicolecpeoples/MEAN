// Require the Express Module
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes_db');

var moment = require("moment"); 

//Create mongoose schemas
var QuoteSchema = new mongoose.Schema({
 username: String,
 quote: String,
 likes: Number,
 created: {type: Date, default: Date.now}
})

mongoose.model('Quotes', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quotes') // We are retrieving this Schema from our Models, named 'User'

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
   res.render('index');
})

app.get('/quotes', function(req, res) {
       Quote.find({}).sort({likes: -1}).exec(function(err, quotes) {
        if(!quotes){
            res.render('quotes');
        }
        else {

            res.render('quotes', { quotes: quotes, moment: moment});
        }
  })
})

app.get('/like/:id', function(req,res) {
    Quote.findOne({_id: req.params.id}, function(err, quote){
            quote.likes +=1;
            quote.save(function(err){
            if(err) {
            console.log('something went wrong');

            }
            else {
                console.log('successfully edited dog!');
                // This is where we would add the user from req.body to the database.
                res.redirect('/quotes');
            }

            })
            
    })

})

// Post Requests
// Add User Request 
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
     var quote = new Quote({username: req.body.username, quote: req.body.quote, likes: 0});
     // if there is an error console.log that something went wrong
     quote.save(function(err){
     	if(err) {
     		console.log('something went wrong');
            res.render('index', {errors: err});
     	}
     	else {
     		console.log('successfully added a quote!');
     		// This is where we would add the user from req.body to the database.
    		res.redirect('/quotes')
     	}
     })
    
})

    
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})