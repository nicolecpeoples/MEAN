var mongoose = require('mongoose');

var friendSchema = new mongoose.Schema({
	first_name: String,
	last_name: String, 
	dob: Date,
	createdAt: { type: Date, default: Date.now },
});

var Friend = mongoose.model('Friend', friendSchema);