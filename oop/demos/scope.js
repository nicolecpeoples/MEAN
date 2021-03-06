// function Ninja(name, age, prevOccupation) {
//   // PRIVATE
//   var privateVar = "This is a private variable";
//   var privateMethod = function() {
//     console.log(this); // What will print here?
//   }
//   // PUBLIC
//   this.name = name;
//   this.age = age;
//   this.prevOccupation = prevOccupation


//   // PUBLIC METHODS DECLARED HERE
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//     privateMethod();           
//     console.log(privateVar);
//   }
// }
// var Andrew = new Ninja("Andrew", 24, "TFA Teacher");
// Andrew.introduce();


function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var self = this; // HERE WE HAVE DECLARED SELF to EQUAL THE NEW OBJECT WE CREATE WITH NEW
  // var _this = this; or var my = this;  also used instead of self 
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method for " + self.name);     // refer to name via self
    console.log(this);
  }
  //PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();      
    console.log(privateVar);
  }
}
var Andrew = new Ninja("Andrew", 24, "TFA Teacher");
Andrew.introduce();