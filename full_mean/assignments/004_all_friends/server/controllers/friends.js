//Server side controller connects to routes and grabs everything from the database and send info back to the factory
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');


function FriendsController(){
	this.index = function(req, res){
		console.log('friends index');
		Friend.find({}, function(err, data){
			if(err){

			}
			
			res.json({data: data});
		})
	
	};
	this.create = function(req,res){
		console.log(req.body.first_name, req.body.last_name);
		var friend = new Friend({ first_name: req.body.first_name, last_name: req.body.last_name, dob: req.body.date});
		console.log(friend);
		friend.save(function(err){
			if(err) {
	            res.json(err);
				return;
	        }
	            
	        res.json(friend);
		})
	};

	this.update = function(req,res){
		Friend.findOne({_id: req.body._id}, function(err, friend) {
			friend.first_name = req.body.first_name,
			friend.last_name = req.body.last_name,
			friend.dob = req.body.dob
			console.log(friend);
			friend.save(function(err){
				if(err){
					res.json(err);
					return;
				}
				res.json(friend);
			})
		})
	};
	this.delete = function(req,res){
		Friend.remove({_id: req.params.id}, function(err, data){
			if(err) {
	            res.json(err);
				return;
	        }
	            
	        
		})
	};

	this.show = function(req,res){
		Friend.find({_id: req.params.id}, function(err, data){
			if(err){
				console.log('sorry, no one matches that id');
			}
			res.json({data:data});
		})
	
  };
}

module.exports = new FriendsController();