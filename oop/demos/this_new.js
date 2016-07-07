//Previous constructor style
function NinjaConstructor(name, prevOccupation) {
  var ninja = {}; // <-- PAY ATTENTION TO THIS LINE!
  ninja.name = name;
  ninja.prevOccupation = prevOccupation
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
  return ninja; // <-- AND THIS LINE!
}



// replacing ninja with this
function NinjaConstructor(name, prevOccupation) {
  var this = {}; // <-- PAY ATTENTION TO THIS LINE! // can be deleted
  this.name = name;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
  return this; // <-- AND THIS LINE!  // can be deleted
}


function NinjaConstructor(name, prevOccupation) {
  this.name = name;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }

  if (!(this instanceof NinjaConstructor)) {
   // the constructor was called without "new".
   return new NinjaConstructor(name, prevOccupation);
 }
}
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
var nikki = NinjaConstructor('Nikki','Historian');