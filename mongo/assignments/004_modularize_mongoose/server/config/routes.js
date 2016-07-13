var mongoose = require('mongoose');
var Dog = mongoose.model('Dog') // We are retrieving this Schema from our Models, named 'User'
var dogs = require('../controllers/dogs.js');
// Get Requests
module.exports = function(app){
    app.get('/', function(req, res) {
           dogs.index(req,res);
    })

    app.get('/dogs/new', function(req, res) {
        res.render('new');
    })

    app.get('/dogs/:id', function(req, res) {
        dogs.show(req, res);
    })


    app.get('/dogs/:id/edit', function(req, res) {
        dogs.edit(req,res);
        
    })

    // Post Requests
    // Add User Request 
    app.post('/dogs', function(req, res) {
        dogs.create(req, res);
        
    })

    app.post('/dogs/:id', function(req, res) {
        dogs.update(req,res);
        
    })

    app.post('/dogs/:id/destroy', function(req, res) {
        dogs.destroy(req, res);
        
    })
}
