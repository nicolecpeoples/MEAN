function VehicleConstructor(name, numWheels, numPassengers){

	var vehicle = {}; //vehicle that will be returned

	vehicle.name = name;
	vehicle.numWheels = numWheels;
	vehicle.numPassengers = numPassengers;

	vehicle.makeNoise = function(){
		console.log("beep beep");
	}

	return vehicle; 

}



var car = VehicleConstructor("siddha", 4, 5);
car.makeNoise();

car.makeNoise = function() {
	console.log("honk honk");
}
car.makeNoise();

var bike = VehicleConstructor("bikey", 2, 1);

bike.makeNoise = function(){
	console.log("ring ring!");
}

bike.makeNoise();

var bus = VehicleConstructor("bussy", 4, 52);

bus.addPassengers = function(newPassengers){
	bus.numPassengers += newPassengers;
}
bus.addPassengers(3);
console.log(bus.numPassengers);

