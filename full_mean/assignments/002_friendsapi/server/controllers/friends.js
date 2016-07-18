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
		var friend = new Friend({first_name: req.params.first_name, last_name: req.params.last_name});
		friend.save(function(err){
			if(err) {
	            res.json(err);
				return;
	        }
	            
	            res.redirect('/friends');
		})
	};


	this.update = function(req,res){
		Friend.update({_id: req.params.id}, function(err, data) {

		})
	};
	this.delete = function(req,res){
		Friend.remove({_id: req.params.id}, function(err, data){
			if(err) {
	            res.json(err);
				return;
	        }
	            
	            res.redirect('/friends');
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