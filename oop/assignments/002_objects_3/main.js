function VehicleConstructer(name, numWheels, numPassengers, speed){

	

	this.updateDistanceTravelled = function(speed){
		this.distance_travelled += speed;
	}

	this.distance_travelled = 0;
	this.name = name;
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;
	this.speed = speed;
	this.vin = Math.floor(Math.random() * (2000000 -1000000)) + 1000000;

}


VehicleConstructer.prototype.makeNoise= function(){
	console.log("noise");
	return this; 
}

VehicleConstructer.prototype.move = function(speed) {
	this.updateDistanceTravelled(this.speed);
	this.makeNoise();
	return this; 
}

VehicleConstructer.prototype.checkMiles = function() {
	console.log(this.distance_travelled);
	return this; 

}

VehicleConstructer.prototype.vinNum = function() {
	console.log(this.vin);
	return this; 

}

var bike = new VehicleConstructer("bikey", 2, 1, 15);
bike.makeNoise().move().move().vinNum();
var car = new VehicleConstructer("car", 4, 5, 60);
car.makeNoise().move().move().vinNum();
// bike.move(50);
// bike.move(20);
bike.checkMiles();
car.checkMiles();