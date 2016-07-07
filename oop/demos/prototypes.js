var MyObjConstructor = function(name){
  var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function(){
    console.log( "I am a method");
  };
}

// After we create our MyObjConstructor:
MyObjConstructor.prototype.methodName = function(){
  //do stuff here!
}

// After we create our MyObjConstructor:
MyObjConstructor.prototype.anotherProperty = function(){
  //do stuff here!
  console.log("I am adding a property to the __proto__ of an object");
}

var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');

console.log(obj1);
obj1.newProperty = "I am new property found in object 1";

console.log(obj1.anotherProperty, "object1 !!");
console.log(obj1.newProperty, "object1 !!");
// we haven't changed or added anything to object2 right???
console.log(obj2);
obj2.anotherProperty();


//Example
function Cat( cat_name ) {
  var name = cat_name;
  this.getName = function() {
    return name;
  };
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function(){
  console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();


console.log(muffin.numLegs);
// poor mutant cats: muffin.__proto__.numLegs ++;
// doing this to muffin will mess up all the cats!