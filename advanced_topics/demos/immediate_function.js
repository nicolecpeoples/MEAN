(function() {
   console.log( "I'm an immediate function!" );
}());

(function() {
   console.log( "I'm an immediate function!" );
})();

//passing arguments to immediate functions
// (function (param1, param2){
//    console.log( "I'm an immediate function!" );
// }) ( arg1, arg2 ) ;

//A common pattern when writing code that should be able to run on non-browser platforms, or when speed is important is passing the global object as an argument. This creates a local copy of the global object inside the function, which results in faster lookup times.
(function (global) {
   console.log( window );               // logs the window object
   console.log( global );               // logs the window object, but faster!
}) ( window ) ;