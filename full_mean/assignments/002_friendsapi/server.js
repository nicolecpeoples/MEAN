// Require the Express Module
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
app.use(bodyParser.json()); 
// Setting our Static Folder Directory
app.use( express.static( path.join( __dirname, 'client' )));
// Setting our Views Folder Directory

// Routes
require('./server/config/mongoose.js');
// store the function in a variable
// invoke the function stored in routes_setter and pass it the "app" variable
require("./server/config/routes.js")(app);
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})