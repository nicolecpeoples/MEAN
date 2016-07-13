// require the mongoose module
var mongoose = require('mongoose');
// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 6},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });


//displaying validation errors server.js side

app.post('/users', function (req, res){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            res.render('index', {title: 'you have errors!', errors: user.errors})
        }
        else {
            res.redirect('/users');
        }
    });
})

//index.js side  <% if(typeof(errors) != 'undefined' ) { %>
 <% if(typeof(errors) != 'undefined' ) { %>
     <% for (var x in errors) { %>
      <h3><%= errors[x].message %></h3>
     <% } %>
 <% } %>