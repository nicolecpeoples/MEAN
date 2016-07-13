// Require the Express Module
var express = require('express');
var mongoose = require('mongoose');
var moment = require("moment"); 
mongoose.connect('mongodb://localhost/message_board_db');

var Schema = mongoose.Schema;

//Create mongoose schemas
var postSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 4},
 message: { type: String, required: true, minlength: 10}, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });

var commentSchema = new mongoose.Schema({

 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 commentor_name: { type: String, required: true, minlength: 4},
 comment: {type: String, required: true , minlength: 10}
}, {timestamp: true });


mongoose.model('Post', postSchema); // We are setting this Schema in our Models as 'User'
var Post = mongoose.model('Post') // We are retrieving this Schema from our Models, named 'User'

mongoose.model('Comment', commentSchema); // We are setting this Schema in our Models as 'User'
var Comment = mongoose.model('Comment') // We are retrieving this Schema from our Models, named 'User'

// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes

// Get Requests
app.get('/', function(req, res) {
    console.log("I am in the index server console");
    Post.find({}).sort({createdAt: -1}).populate('comments').exec(function(err, posts){
        if(err){
            console.log("could not find quotes");
        }
        else{

            res.render('index', {posts: posts, moment: moment});
        }
    })

   
})


// Post Requests
app.post('/posts', function(req, res) {
    console.log("POST DATA", req.body);
     var post = new Post({name: req.body.name, message: req.body.message });
     // if there is an error console.log that something went wrong
     post.save(function(err){
        if(err) {
            console.log('something went wrong');
            res.render('index', {errors: post.errors});
        }
        else {
            console.log('successfully added a quote!');
            // This is where we would add the user from req.body to the database.
            res.redirect('/')
        }
     })
    
})

app.post('/posts/:id', function(req,res) {
    Post.findOne({_id: req.params.id}, function(err, post){
         var comment = new Comment({_post: post._id, commentor_name: req.body.name, comment: req.body.comment});
         console.log(post._id);
         post.comments.push(comment);
         comment.save(function(err){
            if(err){
                console.log('there was an error');
                res.redirect('/')
            }
            else{
            console.log('comment saved');
                 post.save(function(err){
                       if(err) { console.log('Error'); } 
                       else { res.redirect('/'); }
                 });
             }
         });
   });
})
    
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})