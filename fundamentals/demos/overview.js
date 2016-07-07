var myarr = [1, 80, 333, 64,72];

for (var i = 0; i< myarr.length; i++){
	console.log(myarr[i]*5)
}

var myObject = {

	language: "Javascript",
	dojo: "Washington DC",
	favorite_instructor: "Kris"
}

for (var key in myObject ){
	console.log(key, myObject[key] + "the value");
}

/*
	Object.keys(myObject).forEach(function(key,value){
	console.log(key, value, myObject[key]);
	})
*/

console.log(a);
var a = "weird";
// Will it throw an error?  What will it print, if it doesn't throw an error?
// How about this?
console.log(typeof(b));
var b = "weird too";
console.log(typeof(b));