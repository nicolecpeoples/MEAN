console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models

var friendSchema = new mongoose.Schema({
 name: String
})

var Friend = mongoose.model('Friend', friendSchema);
