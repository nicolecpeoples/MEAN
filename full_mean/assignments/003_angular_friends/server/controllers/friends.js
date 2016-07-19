console.log('friends controller');

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
		var friend = new Friend({ first_name: req.body.first_name, last_name: req.body.last_name});
		console.log(friend);
		friend.save(function(err){
			if(err) {
	            res.json(err);
				return;
	        }
	            
	        redirect('/friends'); 
		})
	};

	this.update = function(req,res){
		console.log(req.body);
		console.log(req.body.first_name);
		Friend.findOne({_id: req.body._id}, function(err, friend) {
			friend.first_name = req.body.first_name,
			friend.last_name = req.body.last_name
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