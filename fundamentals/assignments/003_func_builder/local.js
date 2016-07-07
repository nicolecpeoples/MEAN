function caller(param){
	if(typeof param === 'function' ){
		
		param();
	}
	else {
		return "You did not provide a function";
	}
}

function caller2(arg){
	

	if(typeof arg === 'function'){
		console.log("starting");
		setTimeout( myDoubleConsoleLog(arg()), 4000);
		return "interesting";
	}

	else {
		return "you didn't give me a function";
	}
	
}

function myDoubleConsoleLog(arg1, arg2){
	if(typeof arg1 === 'function' && typeof arg2 === 'function'){
		console.log(arg1(), arg2());
	}
	else {
		console.log(arg1(), arg2())
	}
}

function alertFunc() {
    alert("Hello!");
}


function runningLogger(){
	console.log("I am running!");
}

function multiplyByTen(num){
	return num * 10;
}

function stringReturnOne(){
	return "I am string number 1";
}

function stringReturnTwo(){
	return "I am string number 2";
}


// console.log(multiplyByTen(5));
// console.log(typeof stringReturnOne);
// caller(stringReturnOne);
caller2(stringReturnOne);
// myDoubleConsoleLog(stringReturnTwo, stringReturnOne);
