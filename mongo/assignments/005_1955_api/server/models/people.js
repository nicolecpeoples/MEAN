// require mongoose
var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
 name: String
})

var Person = mongoose.model('People', PeopleSchema);
