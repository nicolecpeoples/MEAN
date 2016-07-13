var mongoose = require('mongoose');

var Dog = mongoose.model('Dog') 

module.exports = {
  index: function(req,res) {
    Dog.find({}, function(err, dogs) {
            if(!dogs){
                console.log("There are no dogs here");
            }
            else {
                res.render('index', {dogs: dogs});
            }
      })
  },

  show: function(req, res) {
     Dog.findOne({_id: req.params.id}, function(err, dog) {
        if(err){
            console.log('dog does not exist');
         }
        else {
            console.log(dog);
            res.render('show', {dog: dog});
        }
      })
  },
  create: function(req, res) {
    var dog = new Dog({dog_name: req.body.dog_name, dog_breed: req.body.dog_breed, dog_age: req.body.dog_age});
    dog.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/');
      }
    })
  }, 
  edit: function(req, res) {
    Dog.findOne({_id: req.params.id}, function(err, dog) {
        if(err){
            console.log('dog does not exist');
         }
        else {
            console.log(dog);
            res.render('update', {dog: dog});
        }
    })
  },
  update: function(req, res){
    console.log("POST DATA", req.body);
         Dog.findOne({_id: req.params.id}, function(err, dog){
             dog.dog_name = req.body.dog_name,
             dog.dog_breed = req.body.dog_breed,
             dog.dog_age = req.body.dog_age
             dog.save(function(err){
                 // if save was successful awesome!
            if(err) {
                console.log('something went wrong');

            }
            else {
                console.log('successfully edited dog!');
                // This is where we would add the user from req.body to the database.
                res.redirect('/');
            }
             })
            })
  },
  destroy: function(req, res) {
    console.log("i am in the destroy function");
        Dog.remove({_id: req.params.id}, function(err){
     // This code will run when the DB has attempted to remove all matching records to {}
        if(err){
            console.log("could not find that dog in our database");
            res.redirect('/');
        }
        else {
            console.log('successfully removed ');
            res.redirect('/');
        }
    })
  }

}