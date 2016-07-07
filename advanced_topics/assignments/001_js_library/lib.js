var _ = {
   map: function(arr, callback) {
   	 var newarr= [];
   	   for(var i=0; i <arr.length; i++){
   	   		newarr.push(callback(arr[i]));		
   	   }
   	   return newarr;
   },

    reduce: function(arr, iteratee, sum) {
    	if(!sum){
	    	var sum = arr[0];
	    }

    	for(var i = 0; i <arr.length; i++){
    		sum = iteratee(sum, arr[i]);

    	}
    	return sum;
	},

   find: function(arr, callback) {   // code here
   		if (!Array.isArray(arr)) { return undefined;}
   		var num;
	   	   for(var i=0; i <arr.length; i++){
	   	   		if(callback(arr[i])){
		   	   		return arr[i];
		   	   	}
	   	   }
	   	   
   },

   filter: function(arr, callback) { 
   	  if (!Array.isArray(arr)) { return undefined;}
   	  var newarr= [];
   	   for(var i=0; i <arr.length; i++){
   	   		if(callback(arr[i])){
	   	   		newarr.push(arr[i]);
	   	   	}
   	   }
   	   return newarr;

 	},

   //returns the values in list without the elements that the truth test passes. The opposite of filter
   reject: function(arr, callback) { 
   	  if (!Array.isArray(arr)) { return undefined;}
   	  var newarr= [];
   	   for(var i=0; i <arr.length; i++){
   	   		if(callback(arr[i]) == false){
	   	   		newarr.push(arr[i]);
	   	   	}
   	   }
   	   return newarr;

 	}

};

// you just created a library with 5 methods!

var reject = _.reject([5,6,7,8,9], function(num){
	return num % 2 == 0;
}); 

var reduce = _.reduce([5,6,7,8,9], function(memo, num){
	return memo + num;
})

var find = _.find([5,6,7,8,9], function(num){
	return num % 2 == 0;
})

var map = _.map([5,6,7,8,9], function(num){
	return num * 3;
})


console.log(map);