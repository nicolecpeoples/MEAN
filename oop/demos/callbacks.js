function multi(arr, callback){
	for(var i=0; i <arr.length; i++){
		arr[i] = callback(arr[i]);
	}
	return arr;
}

multi(arr, function(num){ return num * 2; });

