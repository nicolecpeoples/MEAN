var empty_array = [ ];             // create empty array with square brackets  (creates a bureau of drawers)
var string_array = [ "hi", "these", "are", "strings" ];
var x = 15;                       // you can log these vars in the console (even a whole array)
console.log("Logging variables to the console", empty_array, string_array, x);
                                  // use square brackets again(e.g. string_array[1])  to access values in the array (to open a specific drawer in the bureau)
console.log('2nd value of string_array', string_array[1]);
                                   // get the length of the array
console.log('string_array has a length of', string_array.length);
string_array.push('awesome');      // adding a new value to the array
console.log(string_array);         // you'll note that string_array now has a new value called awesome
string_array.pop();                // removing the last value in the array
console.log(string_array);         // the last value in the array is now gone!

/* Each array has a length property. The value of this property is either 0 or 1 greater than the last index with an explicitly declared value in the array (since arrays start their index at 0) and not necessarily the number of elements in the array. Closely study the code block below!
*/
var arr = [3, 6];
arr[234] = "hi";
//
console.log( arr.length ); // 235
console.log( arr[34] ); // undefined
arr.length = 3;
console.log( arr[34] );
console.log( arr[234] );
console.log( arr.length );
arr.length = 500;
console.log( arr[234] );
console.log( arr.length );
console.log(arr)