//Before you define your models, you must establish a Schema variable like the one below. You'll be calling this variable inside of all the models that require the associations. Why? Well, this will enable your models to read and understand those huge ObjectId attributes that MongoDB automatically generated!
var Schema = mongoose.Schema;


//Do you see what is going on here? First of all, we know this is a  one-to-many relationship because the comments property is an array, meaning the post model will have many comments. Secondly, the object we are going to have many of has two properties: type and ref. The type property tells Mongoose the unique identifier for our association, which for us is the ObjectID of each comment. The ref property tells Mongoose what model the unique identifier is associated with.  Long story short:

Mongoose is just keeping an array full of associated comment IDs
Which is, if you think about it, the only way we could accomplish this with MongoDB as it is.
//post model 

var postSchema = new mongoose.Schema({
 text: { type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });
//  notice the _comments property is an array populated with objects.  The 'type' property of the object//  inside of the array is an attribute that tells Mongoose what to look for.

//comment model
//Now we must tell the comment model it belongs to a post model. When we are referencing a model that another model belongs to, we use an underscore ( _ ) to indicate this is another model. Note the small variation in syntax in the type property.
var commentSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: { type: String, required: true },
}, {timestamps: true });


//retrieving the data
// just an example route, your routes may look different
app.get('/posts/:id', function (req, res){
// the populate method is what grabs all of the comments using their IDs stored in the 
// comment property array of the post document!
 Post.findOne({_id: req.params.id})
 .populate('comments')
 .exec(function(err, post) {
      res.render('post', {post: post});
        });
});


//.populate() method and the .exec() method. The .populate() method basically tells your post model to gather the associated comments and the .exec() method actually fires the action.

//Adding a comment 

 //  just a sample route.  Post request to update a post.
 //  your routes will probably look different.
 app.post('/posts/:id', function (req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        // data from form on the front end
        var comment = new Comment(req.body);
        //  set the reference like this:
        comment._post = post._id;
        // now save both to the DB
        comment.save(function(err){
                post.comments.push(comment);
                post.save(function(err){
                     if(err) {
                          console.log('Error');
                     } else {
                          res.redirect('/');
                     }
                 });
         });
    });
 });



//everything together

var Schema = mongoose.Schema;
var postSchema = new mongoose.Schema({
 text: {type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
var commentSchema = new mongoose.Schema({
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: {type: String, required: true }
}, {timestamp: true });
app.get('/posts/:id', function (req, res){
 Post.findOne({_id: req.params.id})
 .populate('comments')
 .exec(function(err, post) {
      res.render('post', {post: post});
        });
});
app.post('/posts/:id', function (req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
         var comment = new Comment(req.body);
         comment._post = post._id;
         post.comments.push(comment);
         comment.save(function(err){
                 post.save(function(err){
                       if(err) { console.log('Error'); } 
                       else { res.redirect('/'); }
                 });
         });
   });
 });








