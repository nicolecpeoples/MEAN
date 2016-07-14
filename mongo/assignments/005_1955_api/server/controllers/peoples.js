var mongoose = require('mongoose');
var Person = mongoose.model('People');

module.exports = {
	index: function(req, res) {
		Person.find({}, function(err, data) {
			if (err) {
				res.json(err);
				return;
			}

			res.json({data: data});
		})
	}, 
	add: function(req, res) {
		var newperson = new Person({name: req.params.name});
		 newperson.save(function(err){
	        if(err) {
	            res.json(err);
				return;
	        }
	            
	            res.redirect('/');
     	})
		
	}, 
	show: function(req, res) {
		Person.find({name: req.params.name}, function(err, data) {
			if (err) {
				res.json(err);
				return;
			}

			res.json({data: data});
		})
	}, 
	remove: function(req, res) {
		Person.remove({name: req.params.name}, function(err, data) {
			if (err) {
				res.json(err);
				return;
			}

			res.redirect('/');
			
		})
	}
}