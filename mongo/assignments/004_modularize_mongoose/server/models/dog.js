// require mongoose
var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
 dog_name: String,
 dog_breed: String,
 dog_age: Number
})

var Dog = mongoose.model('Dog', DogSchema);